const log = require('debug')('config');
const Config = require('webpack-config').default;
const {environment} = require('webpack-config');

environment.setAll({
		config_root: () => __dirname,
    env: () => process.env.NODE_ENV
});

const WebpackConfig = new Config()
	.extend('[config_root]/base/index.js')
	.extend('[config_root]/[env]/index.js')
	;

log(WebpackConfig);

module.exports = WebpackConfig;