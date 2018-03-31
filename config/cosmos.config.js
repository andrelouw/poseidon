module.exports = {
  rootPath: '../',
  // containerQuerySelector: '#root',
  globalImports: ['bootstrap/dist/css/bootstrap.min.css', './src/index.sass'],
  webpackConfigPath: './config/webpack.config.dev',
  publicPath: 'public',
  // Optional: Add this when you start using proxies
  // proxiesPath: 'src/cosmos.proxies',
};
