import debug from 'debug';
import Config from 'webpack-config';

import Context from '../context';

const log = debug(`app.[${Context.PKG.name}]:Build/webpack/test`);

export default new Config()
  .extend({
    'build/config/webpack/dev.js': config => {
      delete config.entry;
      return config;
    }
  })
  .merge({
    filename: __filename,
  });
