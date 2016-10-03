import path from 'path';
import debug from 'debug';
import Config from 'webpack-config';
import webpack from 'webpack';
import StatsPlugin from 'stats-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import VisualiserPlugin from 'webpack-visualizer-plugin';

import * as LoaderStrings from '../../lib/loader-strings';
import Constants from '../constants';
import Env from '../env';

const log = debug(`app.[${Constants.name}]:Build/webpack/base`);

export default new Config()
  .merge({

    entry: {
      app: ['app'],
      vendor: [
        'vue', 'vuex', 'vue-resource', 'vue-router',
      ]
    },

    resolve: {
      extensions: ['', '.js', '.scss', '.vue'],
      fallback: [path.join(Constants.CWD, 'node_modules')],
      alias: {
        'app': path.resolve(Constants.CWD, 'src'),
        // https://github.com/vuejs/vue-loader/issues/287#issuecomment-241372519
        'vue': 'vue/dist/vue.js',
      }
    },

    resolveLoader: {
      fallback: [path.join(Constants.CWD, 'node_modules')]
    },

    output: {
      path: path.resolve(Constants.CWD, 'dist'),
      publicPath: '/',
      filename: '[name].[hash:16].js',
      chunkFilename: '[id].[hash:16].js'
    },

    watch: {
      aggregateTimeout: 300,
      poll: true
    },

    stats: true,
    profile: true,

    module: {
      preloaders: [
        {
          test: /\.(vue|js)$/,
          loader: 'eslint-loader',
          include: path.join(Constants.CWD, 'src'),
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          loader: LoaderStrings.Generate([
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ], {
            extract: true
          }),
        },
        {
          test: /\.css$/,
          loader: LoaderStrings.Generate([
            'css-loader'
          ], {
            extract: true
          })
        },
        {
          test: /\.svg\??(\d*)$/,
          loaders: [
            `url-loader?limit=10000&mimetype=image/svg+xml&name=${Constants.STATIC_URL_IMAGES}[name].[hash:7].[ext]`,
            'svgo-loader?useConfig=svgoConfig',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|ico)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 1000,
            name: `${Constants.STATIC_URL_IMAGES}[name].[ext]?[hash:7]`
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: `${Constants.STATIC_URL_FONTS}[name].[ext]?[hash:7]`
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': Env
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: true,
      }),
      new ExtractTextPlugin('css/[name].[hash:16].css'),
      new VisualiserPlugin({
        filename: 'stats.html'
      })
    ],

    vue: {
      loaders: Object.assign(LoaderStrings.GenerateVueCssLoaders({
        extract: true
      }), {
        js: 'isparta'
      })
    },

    htmlLoader: {
      interpolate: true,
      attrs: ['img:src', 'link:href']
    },

    eslint: {
      configFile: path.resolve(Constants.CWD, '.eslintrc'),
      formatter: require('eslint-friendly-formatter'),
    },

    css: {
      minimize: false,
      autoprefixer: false
    },

    postcss() {
      return [
        // autoprefixer(browserlist)
      ];
    },

    sassLoader: {
      minify: true,
      sourceComments: false,
      errLogToConsole: true,
      includePaths: [
        './src/styles',
        './node_modules/bourbon',
        './node_modules/bourbon',
      ]

    },

    svgoConfig: {
      plugins: [
        {
          removeTitle: true
        },
        {
          removeDesc: true
        },
        {
          removeUselessDefs: true
        },
        {
          convertColors: {
            shorthex: false
          }
        },
        {
          convertPathData: false
        },
        {
          cleanupAttrs: true
        },
        {
          removeDoctype: true
        },
        {
          removeComments: true
        },
        {
          mergePaths: false
        },
      ]
    },

  });
