require("../env");
const Config = require('webpack-config').default;

module.exports = new Config()
	.extend(`${__dirname}/../base/index.js`)
	.extend(`${__dirname}/styles.js`)
	.extend(`${__dirname}/serve.js`)
	;
