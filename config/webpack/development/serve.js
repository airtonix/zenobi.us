const Config = require('webpack-config').default;


module.exports = new Config()
  .merge({
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      overlay: true
    }
  });