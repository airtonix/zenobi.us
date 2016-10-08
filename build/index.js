import jsonfile from 'jsonfile';
import debug from 'debug';
import webpack from 'webpack';

import config from './config/webpack';
import Context from './config/context';


const log = debug(`app.[${Context.PKG.name}]:Build`);

webpack(config)
  .run((err, stats) => {
    if (err) {
      log(err);
    }
    log('rebuild...');
    if (config.stats && config.statsOutputPath) {
      jsonfile.writeFile(config.statsOutputPath, stats, log);
    }
  });