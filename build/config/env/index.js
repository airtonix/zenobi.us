import Config from 'webpack-config';

export default new Config()
	.extend('build/config/env/[ENV_NAME].js')
	.remove('DEPENDENCY_TREE');