import Config from 'webpack-config';
import debug from 'debug';

const log = debug(`app:Build/context`);

const output = new Config()
  .extend('build/config/context/[ENV_NAME].js')
  .remove('DEPENDENCY_TREE');


export default output;
