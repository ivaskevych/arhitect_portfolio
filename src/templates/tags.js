import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet";
import * as PropTypes from "prop-types"

const propTypes = {
  pathContext: PropTypes.object.isRequired,
}

const TagsTemplate = ({ pathContext }) => {
  const { tags } = pathContext
  return (
    <section className="post-list">
      <Helmet title={`Tags | Ustyna Hnes`} />
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
    </section>
  )
}

TagsTemplate.propTypes = propTypes

export default TagsTemplate
