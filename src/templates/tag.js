import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet";
import Post from "../components/Post"
import * as PropTypes from "prop-types"

const propTypes = {
  pathContext: PropTypes.object.isRequired,
}

const capitalize = (text) => {
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`
}

const TagTemplate = ({ pathContext }) => {
  const { posts, tag } = pathContext
  return (
    <div className="post-list">
      <Helmet title={`${capitalize(tag)} | Ustyna Hnes `} />
      <div className="description">Posts with {tag} tag:</div>
        {posts.map((post) => (
          <Post node={post} key={post.id} />
        ))}
    </div>
  )
}

TagTemplate.propTypes = propTypes

export default TagTemplate
