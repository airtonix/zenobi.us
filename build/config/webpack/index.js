import debug from 'debug';

import Config, { environment } from 'webpack-config';

const log = debug(`app:Build/webpack`);

environment.setAll({
	ENV_NAME: () => process.env.WEBPACK_ENV || process.env.NODE_ENV
});

export default new Config()
	.extend('build/config/webpack/[ENV_NAME].js')
	.merge((config) => {
		log('done');
		return config;
	});