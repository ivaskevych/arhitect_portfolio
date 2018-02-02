import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet";
import * as PropTypes from "prop-types"

const propTypes = {
  pathContext: PropTypes.object.isRequired,
}

const TagsTemplate = ({ pathContext }) => {
  const { tags } = pathContext
  if (tags) {
    return (
      <div className="post-list">
        <Helmet title={`Ustyna Hnes | Tags`} />
        <div className="description">All tags:</div>
        <ul className="tags">
          {tags.map((tag, index) =>
              <li key={index}>
                <Link to={`/tags/${tag}`}>
                  {tag}
                </Link>
              </li>
          )}
        </ul>
      </div>
    )
  }
}

TagsTemplate.propTypes = propTypes

export default TagsTemplate
