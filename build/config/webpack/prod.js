import debug from 'debug';
import webpack from 'webpack';
import Config from 'webpack-config';
import Context from '../context';

const log = debug(`app:Build/webpack/prod`);

export default new Config()
  .extend({
    'build/config/webpack/base.js': config => {
      log('removing debug');
      delete config.debug;
      log('removing devtools');
      delete config.devtool;
      log('removing output.pathinfo');
      delete config.output.pathinfo;
      return config;
    }
  })
  .merge({
    filename: __filename,
    output: {
      pathinfo: true,
    },
    plugins: [

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
