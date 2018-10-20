const Config = require('webpack-config').default;

module.exports = new Config()
	.extend('[config_root]/base/resolve__aliases.js')
	.extend('[config_root]/base/resolve__extensions.js')
	;