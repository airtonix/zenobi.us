import debug from 'debug';
import Config from 'webpack-config';

import Context from '../context';

const log = debug(`app.[${Context.PKG.name}]:Build/webpack/uat`);

export default new Config()
  .extend('build/config/webpack/prod.js');
