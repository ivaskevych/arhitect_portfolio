import React from "react"
import Link from "gatsby-link"
import Post from "../components/Post"
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    const ukPostEdges = this.props.data.uk.edges
    return (
      <section className="post-list">
        {ukPostEdges.map(({ node }) => (
          <Post node={node} key={node.id} />
        ))}
      </section>
    )
  }
}

IndexPage.propTypes = propTypes

export default IndexPage

export const postQuery = graphql`
  query PostQuery {
    uk: allContentfulPost(filter: { node_locale: { eq: "uk-UA" } }) {
      edges {
        node {
          id
          date(formatString: "MMMM DD, YYYY")
          title {
            title
          }
        }
      }
    }
  }
`
