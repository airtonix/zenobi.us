import path from 'path';
import debug from 'debug';
import webpack from 'webpack';
import Config from 'webpack-config';
import Constants from '../constants';

const log = debug(`app.[${Constants.name}]:Build/webpack/prod`);

export default new Config()
  .extend({
    'build/config/webpack/base.js': config => {
        delete config.debug;
        delete config.devtool;
        delete config.output.pathinfo;
        return config;
      }
  })
  .merge({
    filename: __filename,
    plugins: [
        new webpack.BannerPlugin(banner, {raw: true}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        })
    ],
  });
