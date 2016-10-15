import Config from 'webpack-config';

const output = new Config()
  .extend('build/config/context/[ENV_NAME].js')
  .remove('DEPENDENCY_TREE');

export default output;
