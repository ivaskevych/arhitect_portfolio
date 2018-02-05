import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet";
import Post from "../components/Post"
import * as PropTypes from "prop-types"

const propTypes = {
  pathContext: PropTypes.object.isRequired,
}

const TagTemplate = ({ pathContext }) => {
  const { posts, tag } = pathContext
  if (posts) {
    return (
      <div className="post-list">
        <div className="description">Posts with {tag} tag:</div>
        <Helmet title={`Ustyna Hnes | ${tag}`} />
          {posts.map((post) => (
            <Post node={post} key={post.id} />
          ))}
      </div>
    )
  }
}

TagTemplate.propTypes = propTypes

export default TagTemplate
