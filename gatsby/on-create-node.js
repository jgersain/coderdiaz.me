const { createFilePath } = require('gatsby-source-filesystem');
const kebabCase = require('lodash.kebabcase');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: kebabCase(value),
    });
  }
};

module.exports = onCreateNode;
