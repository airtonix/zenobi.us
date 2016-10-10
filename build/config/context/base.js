import Config from 'webpack-config';
import PKG from '../../../package.json';

export default new Config()
  .merge({
    PKG,
    'CWD': process.cwd(),
    'APP__BANNER': `/**
     * v${PKG.name}
     * v${PKG.version}
     * v${PKG.author}
     * ${PKG.homepage}
     * Released under the ${PKG.license} License
     **/`,
    'CONFIG': {
      'STATIC_URL': '/static/',
      'STATIC_URL_IMAGES': 'static/img/',
      'STATIC_URL_SCRIPTS': 'static/js/',
      'STATIC_URL_STYLES': 'static/css/',
      'STATIC_URL_FONTS': 'static/fonts/',
      'VALUE_DOMAIN_NAME': 'zenobi.us',
      'VALUE_API_ROOT': '/api',
      'SERVICE_GOOGLEANALYTICS_KEY': 'foo',
      'SERVICE_FORMSPREE_URI': 'https://formspree.io/its@zenobi.us',
      'SERVICE_GITHUBAPI_URI': 'https://api.github.com/repos/airtonix/zenobi.us',
    }
  });