const Config = require('webpack-config').default;

module.exports = new Config()
	.merge({
		resolve: {
	    extensions: ['.js', '.json', '.scss', '.css'],
		}
	});
