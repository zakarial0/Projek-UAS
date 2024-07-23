/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Landing page`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon" : "src/images/web-icon.png"
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/Fasilitas`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `produk`,
        path: `${__dirname}/src/produk`,
      }
    }
  ]
};