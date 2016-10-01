import debug from 'debug';
import Constants from '../config/constants';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const log = debug(`app.[${Constants.name}]:Build/webpack/uat`);

/**
 * @param  {Boolean}	useSourceMaps
 * @return {string}
 */
function expandToVerboseFormatFactory (useSourceMaps = false) {
	return function (loader) {
		let extraParamChar;
		if (/\?/.test(loader)) {
			loader = loader.replace(/\?/, '-loader?');
			extraParamChar = '&';
		} else {
			loader = loader + '-loader';
			extraParamChar = '?';
		}
		return loader + (useSourceMaps ? extraParamChar + 'sourceMap' : '');
	}
}

/**
 * @description generate loader string to be used with extract text plugin
 * @param {Object}
 */
function SourceLoaderStringFactory (options) {
	return function (loaders) {
		let expander = expandToVerboseFormatFactory(options.sourceMap),
			sourceLoader = loaders
				.map(expander)
				.join('!');
	}
}

/**
 * @param {Object}
 */
function VueStyleLoaderFactory (options) {
	return function (Source) {
		if (options.extract) {
			return ExtractTextPlugin.extract('vue-style-loader', Source);
		} else {
			return ['vue-style-loader', Source].join('!');
		}
	}
}

/**
 * @param  {Object}
 * @return {Object}
 */
export function css (options = {}) {
	let generate = SourceLoaderStringFactory(options),
		vueStyle = VueStyleLoaderFactory(options);

	// http://vuejs.github.io/vue-loader/configurations/extract-css.html
	return {
		css: vueStyle(generate(['css'])),
		less: vueStyle(generate(['css', 'less'])),
		sass: vueStyle(generate(['css', 'sass?indentedSyntax'])),
		scss: vueStyle(generate(['css', 'sass'])),
		stylus: vueStyle(generate(['css', 'stylus'])),
		styl: vueStyle(generate(['css', 'stylus'])),
	};
}