const Config = require('webpack-config').default;

module.exports = new Config()
	.merge({
		resolve: {
	    // extensions: ['.md', '.js', '.json', '.scss', '.css'],
		}
	});
