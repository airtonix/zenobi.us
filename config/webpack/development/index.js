const Config = require('webpack-config').default;

module.exports = new Config()
	.extend('[config_root]/[env]/styles.js')
	.extend('[config_root]/[env]/serve.js')
	;
