/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path');
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.coderdiaz.me',
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
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-dribbble`,
      options: {
        access_token: 'c45be162c0dae8c4c3ea96a4ee734d910149c29b3f3c16abe8ed3595dc118e54',
      },
    },
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
    {
      resolve: `gatsby-plugin-preconnect`,
      options: {
        domains: [
          'https://api.dribbble.com',
          'https://fonts.googleapis.com',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            'cache-control: public',
            'cache-control: no-cache',
          ],
          '/page-data/*': [
            'cache-control: public',
            'cache-control: max-age=0',
            'cache-control: must-revalidate',
          ],
        },
        mergeCachingHeaders: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-60687969-1',
      },
    },
  ],
};
