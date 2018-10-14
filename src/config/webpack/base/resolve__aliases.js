const Config = require('webpack-config').default;
const path = require('path');

module.exports = new Config()
	.merge({
		resolve: {
			alias: {
				'@content': path.resolve(process.cwd(), 'src/content'),
				'@components': path.resolve(process.cwd(), 'src/components'),
				'@helpers': path.resolve(process.cwd(), 'src/helpers'),
				'@uikit': path.resolve(process.cwd(), 'src/uikit'),
			}
		}
	});