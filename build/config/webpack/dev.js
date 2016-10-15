import path from 'path';
import debug from 'debug';
import webpack from 'webpack';
import Config from 'webpack-config';

import Context from '../context';

const log = debug(`app:Build/webpack/dev`);

export default new Config()
  .extend({
    'build/config/webpack/base.js': config => {
      Object
        .keys(config.entry)
        .forEach(entry => {
          let original = config.entry[entry];
          log(`Adding hotmodule reload client to entrypoint: [${original}]`);
          config.entry[entry] = ['./build/client']
            .concat(Array.isArray(original) ? original : [original]);
        });
      return config;
    }
  })
  .merge({
    filename: __filename,
    debug: true,
    devtool: '#source-map',

    output: {
      pathinfo: true,
    },

    server: {
      port: 3000
    },

    database: {
      path: path.join(Context.CWD, 'mocks', 'db.json')
    },

    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],

  });
