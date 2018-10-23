const {environment} = require('webpack-config');

environment.setAll({
		config_root: () => __dirname,
    env: () => process.env.NODE_ENV
});
