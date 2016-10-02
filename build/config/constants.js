import PKG from '../../package.json';

const Constants = Object.assign({}, PKG, {
  CWD: process.cwd(),
  Banner: `
	/**
	 * v${PKG.name}
	 * v${PKG.version}
	 * v${PKG.author}
	 * ${PKG.homepage}
	 * Released under the ${PKG.license} License
	 **/
	`,
  STATIC_URL: '/static/',
  STATIC_URL_IMAGES: '/static/img/',
  STATIC_URL_SCRIPTS: '/static/js/',
  STATIC_URL_STYLES: '/static/css/',
  STATIC_URL_FONTS: '/static/fonts/',
});

export default Constants;