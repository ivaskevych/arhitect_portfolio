import React from "react"
import Img from "gatsby-image"
import Link from "gatsby-link"
import Helmet from "react-helmet";
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

const Author = ({ author, date }) => (
  <div className="author">
    <div className="avatar">
      <Link key={author.id} to={`/author/${author.id}/`}>
        <img
          src={author.profilePhoto.file.url}
          alt={author.profilePhoto.file.fileName}
          width="50"
          height="50" />
      </Link>
    </div>
    <div className="name">
      <Link key={author.id} to={`/author/${author.id}/`}>
        {author.name}
      </Link>
      <div className="date">{date}</div>
    </div>
  </div>
)

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const { next, prev } = this.props.pathContext
    const {
      id,
      title: { title },
      author,
      description: { childMarkdownRemark: { html } },
      images,
      category,
      tags,
      date
    } = post
    return (
      <div>
        <Helmet>
          <title>{title} | Ustyna Hnes</title>
          <meta name="description" content={title} />
          <meta property="og:title" content={title + " | Ustyna Hnes Portfolio"}/>
          {/* <meta property="og:image" content={cover.sizes.src} />
          <meta property="og:image:width" content="1800" />
          <meta property="og:image:height" content="1200" /> */}
          <meta property="og:url" content={"https://ustyna-hnes.netlify.com/post/" + id + "/"} />
        </Helmet>
        {author.map(item => <Author key={item.id} author={item} date={date} />)}
        <div className="category">Category:&nbsp;
          {category.map((item, index) =>
            <Link key={index} to={`/categories/${item.id}/`}>
              {item.title}
            </Link>
          )}
        </div>
        <div className="post">
          <h1 className="title">{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div className="post-images">
            {images && (
              images.map(image => (
                <Img
                  key={image.id}
                  sizes={image.sizes}
                  alt={image.title}
                  title={image.title}
                  outerWrapperClassName={image.description}
                  backgroundColor={"#f1f1f1"}
                />
              ))
            )}
          </div>
        </div>
        <div>
          <ul className="tags">
            {tags.map((tag, index) =>
              <li key={index}>
                <Link to={`/tags/${tag}/`}>
                  {tag}
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="posts-nav">
          <div className="prev">
            <p>
              {prev ? 'Previous' : ''}
            </p>
            {prev && (
              <Link to={`/post/${prev.id}`}>
                {prev.title.title}
              </Link>
            )}
          </div>
          <div className="next">
            <p>
              {next ? 'Next' : ''}
            </p>
            {next && (
              <Link to={`/post/${next.id}`}>
                {next.title.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    )
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

export const pageQuery = graphql`
  query postQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      id
      title {
        title
      }
      tags
      date(formatString: "MMMM DD, YYYY")
      description {
        id
        childMarkdownRemark {
          id
          html
        }
      }
      images {
        id
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      category {
        id
        title
      }
      author {
        id
        name
        profilePhoto {
          id
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  }
`
