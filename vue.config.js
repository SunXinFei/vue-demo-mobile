module.exports = {
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/',
  devServer: {
    port: 8081,
    disableHostCheck: true
  }
};
