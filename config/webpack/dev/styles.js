const Config = require('webpack-config').default;


module.exports = new Config()
  .merge({
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          { loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [
                require('postcss-preset-env')({}),
                require('postcss-functions')({}),
              ]
            }
          },
          { loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }]
    }
  })
;
