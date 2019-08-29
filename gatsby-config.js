require("dotenv").config()
const { ANALYTICS_ID } = process.env

module.exports = {
  siteMetadata: {
    title: `Trident by Dobrin Dobrev`,
    description: `My name is Dobrin Dobrev and this is my personal CV site made by gatsby and grafcms`,
    author: `@iamdobri`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ANALYTICS_ID,
      },
    },
    "gatsby-background-image",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans`, `sans-serif\:,400,600`, "Bangers", `cursive`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `cms`,
        url: `https://api-euwest.graphcms.com/v1/cjzlgm5ry2p4d01i7aiaf91pr/master`,
        typeName: `GraphCMS`,
        refetchInterval: 10,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Trident by Dobrin Dobrev`,
        short_name: `Ocean CV`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/trident.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
