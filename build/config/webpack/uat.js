import debug from 'debug';
import Config from 'webpack-config';
import Constants from '../constants';

const log = debug(`app.[${Constants.name}]:Build/webpack/uat`);

export default new Config()
  .extend('build/config/webpack/prod.js');
