module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: "E CELL IIITP",
    description: "The Entrepreneurship cell of IIIT Pune.",
    author: "@ecell",
    siteUrl:"https://ecelliiitp.org"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-180676945-1",
        head: true,
        anonymize: true,
        pageTransitionDelay: 0,
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
  ],
}
