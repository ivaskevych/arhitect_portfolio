const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

const createTagPages = (createPage, posts) => {
  const tagPageTemplate = path.resolve(`src/templates/tag.js`)
  const tagsTemplate = path.resolve(`src/templates/tags.js`)

  const postsByTags = {}

  _.each(posts, ({ node }) => {
    const {tags} = node

    if (tags) {
      _.each(tags, tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = []
        }

        postsByTags[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTags)

  createPage({
    path: `/tags`,
    component: slash(tagsTemplate),
    context: {
      tags: tags.sort()
    }
  })

  _.each(tags, tag => {
    const posts = postsByTags[tag]

    createPage({
      path: `/tags/${tag}`,
      component: slash(tagPageTemplate),
      context: {
        posts,
        tag
      }
    })
  })
}

const createCategoryPages = (createPage, categories) => {
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const categoriesTemplate = path.resolve(`src/templates/categories.js`)

  createPage({
    path: `/categories`,
    component: slash(categoriesTemplate)
  })

  _.each(categories, category => {
    createPage({
      path: `/categories/${category.id}/`,
      component: slash(categoryTemplate),
      context: {
        id: category.id
      },
    })
  })
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const authorTemplate = path.resolve(`src/templates/author.js`)

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulPost(limit: 1000) {
            edges {
              node {
                id
                date(formatString: "MMMM DD, YYYY")
                title {
                  title
                }
                tags
                category {
                  id
                  title
                }
                author {
                  id
                  name
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

		    const posts = result.data.allContentfulPost.edges;

		    createTagPages(createPage, posts)

        _.each(posts, (edge, index) => {
          createPage({
            path: `/post/${edge.node.id}/`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
			        prev: index === 0 ? null : posts[index - 1].node,
			        next: index === (posts.length - 1) ? null : posts[index + 1].node
            },
          })

          createCategoryPages(createPage, edge.node.category)

          _.each(edge.node.author, author => {
            createPage({
              path: `/author/${author.id}/`,
              component: slash(authorTemplate),
              context: {
                id: author.id
              },
            })
          })
        })

		    resolve();
      })
  })
}
