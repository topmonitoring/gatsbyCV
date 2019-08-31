require("dotenv").config()
const { ANALYTICS_ID, GRAFCMS_API } = process.env

module.exports = {
  siteMetadata: {
    title: `Trident by Dobrin Dobrev`,
    description: `Hi there!!! My name is Dobrin Dobrev and I am a web developer, freelancer, and open source contributor. This is my personal site where you can see my latest projects, skills and what I'm up to. If you are starting a business and need some help with your website don't hesitate to contact me. I specialize in creating static websites which are super fast and easy to use with amazing designs, SEO friendly, work great on mobile and come with  FREE HOSTING by Netlify.`,
    author: `@iamdobri`,
    keywords: [
      "Dobrin",
      "Dobrin Dobrev",
      "developer",
      "freelancer",
      "programmer",
    ],
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
        url: GRAFCMS_API,
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
    `gatsby-plugin-offline`,
  ],
}
