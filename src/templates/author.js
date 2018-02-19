import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet";
import Post from "../components/Post"
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class AuthorTemplate extends React.Component {
  render() {
    const author = this.props.data.contentfulAuthor
    const {
      name,
      post
    } = author
    return (
      <div className="post-list">
        <Helmet title={`Posts by ${name} | Ustyna Hnes`} />
        <div className="description">Posts by {name}</div>
        {post.map((post) => (
          <Post node={post} key={post.id} />
        ))}
      </div>
    )
  }
}

AuthorTemplate.propTypes = propTypes

export default AuthorTemplate

export const authorQuery = graphql`
  query authorQuery($id: String!) {
    contentfulAuthor(id: { eq: $id }) {
      name
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
