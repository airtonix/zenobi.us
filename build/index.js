import jsonfile from 'jsonfile';
import debug from 'debug';
import webpack from 'webpack';

import config from './config/webpack';
import Constants from './config/constants';


const log = debug(`app.[${Constants.name}]:Build`);

webpack(config)
	.run( (err, stats) => {
		if (err) { log(err); }
		log('rebuild...');
		if (config.stats && config.statsOutputPath) {
			jsonfile.writeFile(config.statsOutputPath, stats, (err) => log);
		}
	});