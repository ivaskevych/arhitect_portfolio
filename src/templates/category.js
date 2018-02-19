import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Post from "../components/Post"
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.data.contentfulCategory
    const {
      title,
      post
    } = category
    return (
      <div className="post-list">
        <Helmet title={`${title} | Ustyna Hnes`} />
        {post.map((post) => (
          <Post node={post} key={post.id} />
        ))}
      </div>
    )
  }
}

CategoryTemplate.propTypes = propTypes

export default CategoryTemplate

export const categoryQuery = graphql`
  query categoryQuery($id: String!) {
    contentfulCategory(id: { eq: $id }) {
      title
      post {
        id
        date(formatString: "MMMM DD, YYYY")
        title {
          id
          title
        }
      }
    }
  }
`
