import React from "react";
import Link from "gatsby-link"

const Post = ({ node }) => (
  <div className="post">
    <Link to={`/post/${node.id}/`}>
      <div className="post__title">
          {node.title.title}
        <span className="post__date">{node.date}</span>
      </div>
    </Link>
  </div>
)

export default Post
