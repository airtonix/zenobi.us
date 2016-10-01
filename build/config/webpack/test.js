import path from 'path';
import debug from 'debug';
import webpack from 'webpack';
import Config from 'webpack-config';
import cssLoaders from './css-loaders';
import Constants from '../constants';

const log = debug(`app.[${Constants.name}]:Build/webpack/test`);

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
