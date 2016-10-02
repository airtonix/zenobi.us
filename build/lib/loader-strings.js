import debug from 'debug';
import Constants from '../config/constants';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const log = debug(`app.[${Constants.name}]:Build/lib/loader-strings`);

/**
 * @param  {Boolean}	useSourceMaps
 * @return {string}
 */
function expandToVerboseFormatFactory(useSourceMaps = false) {
  return function(loader) {
    let extraParamChar,
      output;
    if (/\?/.test(loader)) {
      output = loader.replace(/\?/, '-loader?');
      extraParamChar = '&';
    } else {
      output = loader + '-loader';
      extraParamChar = '?';
    }
    output = output + (useSourceMaps ? extraParamChar + 'sourceMap' : '');
    log('expandToVerboseFormat', loader, ' > ', output);
    return output;
  };
}

/**
 * @description generate loader string to be used with extract text plugin
 * @param {Object}
 */
function SourceLoaderStringFactory(options = {
    sourceMap: true
  }) {
  return function(loaders) {
    let expander = expandToVerboseFormatFactory(options.sourceMap),
      sourceLoader = loaders
        .map(expander)
        .join('!');
    log('SourceLoaderString.loaders', loaders, ' > ', sourceLoader);
    return sourceLoader;
  };
}

/**
 * @param {Object}
 */
function ExtractStyleLoaderFactory(options) {
  return function(Loader, Source) {
    let output,
      extracted = options.extract;
    if (extracted) {
      output = ExtractTextPlugin.extract(Loader, Source);
    } else {
      output = [Loader, Source].join('!');
    }
    log('ExtractStyleLoader.Source', Source, options, output);
    return output;
  };
}

export function Generate(loaders, options) {
  return SourceLoaderStringFactory(options)(loaders);
}

/**
 * @param  {Object}
 * @return {Object}
 */
export function css(options = {}) {
  let generate = SourceLoaderStringFactory(options),
    extractor = ExtractStyleLoaderFactory(options);

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: extractor('vue-style-loader', generate(['css'])),
    less: extractor('vue-style-loader', generate(['css', 'less'])),
    sass: extractor('vue-style-loader', generate(['css', 'sass?indentedSyntax'])),
    scss: extractor('vue-style-loader', generate(['css', 'sass'])),
    stylus: extractor('vue-style-loader', generate(['css', 'stylus'])),
    styl: extractor('vue-style-loader', generate(['css', 'stylus'])),
  };
}