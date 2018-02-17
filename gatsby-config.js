require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Ustyna Hnes | Portfolio`,
	  siteUrl: `https://ustyna-hnes.netlify.com`
  },
  plugins: [
    `gatsby-plugin-react-next`,
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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://ustyna-hnes.netlify.com`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-27965072-5",
        anonymize: false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ustyna Hnes Portfolio",
        short_name: "Ustyna Hnes",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        // icons: [{
        //   src: `/favicons/android-chrome-192x192.png`,
        //   sizes: `192x192`,
        //   type: `image/png`,
        // },
        // {
        //   src: `/favicons/android-chrome-512x512.png`,
        //   sizes: `512x512`,
        //   type: `image/png`,
        // }]
      }
    },
    {
      resolve: `gatsby-transformer-remark`
    },
  	{
  	  resolve: `gatsby-plugin-sitemap`
  	},
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
}
