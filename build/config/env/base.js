import Config from 'webpack-config';

export default new Config()
	.merge({
		APP__SERVICE_GOOGLEANALYTICS_KEY: '"foo"',
		APP__VALUE_API_ROOT: '"/api"',
	});