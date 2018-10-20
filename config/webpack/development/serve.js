const Config = require('webpack-config').default;


module.exports = new Config()
  .merge({
    serve: {
      client: 'localhost',
      host: '0.0.0.0',
      port: 8080,
      hot: true,
    }
  });