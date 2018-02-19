import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet";
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class CategoriesTemplate extends React.Component {
  render() {
    const categories = this.props.data.allContentfulCategory.edges
    return (
      <div className="post-list">
        <Helmet title={`Categories | Ustyna Hnes`} />
        <div className="description">All categories:</div>
        <ul className="tags">
          {categories.map(category =>
            <li key={category.node.id}>
              <Link to={`/categories/${category.node.id}/`}>
                <div>{category.node.title}</div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

CategoriesTemplate.propTypes = propTypes

export default CategoriesTemplate

export const categoriesQuery = graphql`
  query categoriesQuery {
    allContentfulCategory {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
