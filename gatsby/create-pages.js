const path = require('path');

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Getting markdown content from posts
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              template_key
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Generating pages
  result.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/${edge.node.frontmatter.template_key}/index.tsx`),
      context: { slug: edge.node.fields.slug },
    })
  });
};

module.exports = createPages;
