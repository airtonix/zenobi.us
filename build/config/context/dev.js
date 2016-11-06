import Config from 'webpack-config';

export default new Config()
  .extend('build/config/context/base.js')
  .extend({
    'build/config/context/base.js': context => {
      context.ENV = context.ENV_NAME__DEV;
      context.isDev = true;
      return context;
    }
  });