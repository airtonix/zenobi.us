import Config, { environment } from 'webpack-config';

environment.setAll({
  ENV_NAME: () => process.env.WEBPACK_ENV || process.env.NODE_ENV
});

export default new Config()
  .extend('build/config/webpack/[ENV_NAME].js');