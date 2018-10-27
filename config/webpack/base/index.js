const Config = require('webpack-config').default;

module.exports = new Config()
	.extend(`${__dirname}/resolve__aliases.js`)
	.extend(`${__dirname}/resolve__extensions.js`)
	.extend(`${__dirname}/aspect__mdx.js`)
	;