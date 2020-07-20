const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Where in the world?`,
    description: `The app that allows user to find each country interesting statistics and information`,
    author: `@mateusz-pocztowski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Comfortaa:300, 500`, `Nunito Sans:700`],
        display: 'swap',
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
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: './src/redux/store',
        cleanupOnClient: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        layouts: path.join(__dirname, 'src/layouts'),
        theme: path.join(__dirname, 'src/theme'),
        hooks: path.join(__dirname, 'src/hooks'),
        store: path.join(__dirname, 'src/redux/store'),
        actions: path.join(__dirname, 'src/redux/actions'),
        reducer: path.join(__dirname, 'src/redux/reducer'),
        icons: path.join(__dirname, 'src/assets/icons'),
      },
    },
  ],
};