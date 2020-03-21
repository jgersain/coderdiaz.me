const onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith('develop') && config.resolve) {
    // Configured alias for solve temporary the react-🔥-dom warning
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    };
  }

  // Configured module for process postcss files
  config.module.rules.push({
    test: /.pcss$/, use: ['style-loader', {
      loader: 'css-loader',
    }, 'postcss-loader'],
  });
};

module.exports = onCreateWebpackConfig;
