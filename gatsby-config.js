module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: "E CELL IIIT Pune",
    description: "The Entrepreneurship cell of IIIT Pune.",
    author: "@ecell",
    siteUrl:"https://ecelliiitp.org"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-ZNSE6RNPE0",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        title: `Ecell`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/ecelliiitpune.jpeg`, 
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://ecelliiitp.org/',
        sitemap: 'https://ecelliiitp.org/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
