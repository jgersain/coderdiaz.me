/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        access_token: `c45be162c0dae8c4c3ea96a4ee734d910149c29b3f3c16abe8ed3595dc118e54`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          urls: [
            `https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Rubik:400,500,700,900&display=swap`
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
  ],
};
