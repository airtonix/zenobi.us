import PKG from '../../package.json';
import debug from 'debug';

const log = debug(`app.[${PKG.name}]:Build`);

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
	`
});

export default Constants;