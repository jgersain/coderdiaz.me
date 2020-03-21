/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = require('./gatsby/on-create-node');
exports.onCreateWebpackConfig = require('./gatsby/on-create-webpack');
exports.createPages = require('./gatsby/create-pages');
