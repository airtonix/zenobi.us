const Config = require('webpack-config').default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const Plugin = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
});

const Loader = {
  test: /.scss$/,
  use: [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      sourceMap: true
    }
  }, {
    loader: "css-loader",
    options: {
      sourceMap: true
    }
  }, {
    loader: "postcss-loader",
    options: {
      ident: 'postcss',
      sourceMap: true,
      plugins: [
        require('postcss-preset-env')({}),
        require('postcss-import')({
          resolve: WebpackResolve({
            alias: require('./base__aliases'),
            modules: ['src', 'node_modules']
          })
        }),
        require('postcss-advanced-variables')({}),
        require('postcss-functions')({}),
      ]
    }
  }]
}

module.exports = new Config()
  .merge({
    plugins: [Plugin],
    module: {
      rules: [Loader]
    }
  });