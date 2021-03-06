module.exports = {
 siteMetadata: {
  title: `Teste Winnin`,
  description: `Teste consiste em criar uma página consultado dados do reddit sobre reactjs `,
  author: `@lucio.ariel`,
 },
 plugins: [
  `gatsby-plugin-styled-components`,
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
    short_name: `starter`,
    start_url: `/`,
    background_color: `#663399`,
    theme_color: `#663399`,
    display: `minimal-ui`,
    icon: `src/images/icon-react.png`, // This path is relative to the root of the site.
   },
  },
  {
   resolve: `gatsby-plugin-google-fonts`,
   options: {
    fonts: [`Roboto`, `300,400,700`],
    display: 'optional',
   },
  },
 ],
};
