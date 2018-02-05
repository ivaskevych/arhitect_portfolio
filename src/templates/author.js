import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet";
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
      <div>
        <Helmet title={`Ustyna Hnes | Posts by ${post.title.title}`} />
        <h2>Posts by {name}</h2>
        {post.map((post, index) =>
          <Link key={index} to={`/post/${post.id}/`}>
            <div>{post.title.title}</div>
          </Link>
        )}
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
        title {
          id
          title
        }
      }
    }
  }
`
