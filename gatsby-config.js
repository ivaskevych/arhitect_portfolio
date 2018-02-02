require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Ustyna Hnes | Portfolio`,
  },
  plugins: [
	`gatsby-plugin-sass`,
  	`gatsby-plugin-catch-links`,
  	`gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID || '',
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
        },
      },
      {
  		resolve: `gatsby-transformer-remark`
  	}
  ]
}
