module.exports = {
  siteMetadata: {
    title: `Ekraus Website`,
    description: `Official Website for Ekraus`,
    author: `@InnocentWahome`,
    siteUrl: `https://ekraus.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-antd',
    //   options: {
    //     style: true
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-less`,
    //   options: {
    //     loaderOptions: {
    //       appendData: `@env: ${process.env.NODE_ENV};`,
    //     },
    //     lessOptions: {
    //       javascriptEnabled: true,
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}