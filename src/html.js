import React from "react"
import * as PropTypes from "prop-types"
import logo from "!file-loader!../static/images/favicon.ico"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
}

class Html extends React.Component {
  render() {
    const { headComponents, body, postBodyComponents } = this.props
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    return (
      <html op="architecture" lang="en">
        <head>
          {headComponents}

          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Architecture portfolio by Ustyna Hnes"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" type="image/x-icon" href={logo} />
          {css}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    )
  }
}

Html.propTypes = propTypes

export default Html
