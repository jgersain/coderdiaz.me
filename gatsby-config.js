/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.coderdiaz.dev',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: "Javier Diaz ― I'm a Software Engineer and teacher based on Mexico City",
    description: "I'm a Software Engineer and teacher based on Mexico City, Mexico. I build outstanding, high-quality websites and web applications.",
    author: "Javier Diaz Chamorro",
    siteUrl: "https://coderdiaz.dev",
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
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
        develop: false,
        tailwind: true,
        content: [
          path.join(process.cwd(), `src/**/!(*.d).{ts,js,jsx,tsx}`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => process.env.GATSBY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
};
