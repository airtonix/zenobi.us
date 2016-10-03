import debug from 'debug';
import Constants from '../config/constants';

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const log = debug(`app.[${Constants.name}]:Build/lib/loader-strings`);


/**
 * @param  {Boolean}  useSourceMaps
 * @return {string}
 * @example
 *  scss
 *  scss-loader
 *  scss-loader?foo
 *  scss?foo
 *  some-other?foo
 *  some-other-loader?foo
 */
export function VerboseLoaderFormatFactory(options = {}) {
  let patternWithLoaderAndQuery = /^([\w\-]*)(\?)?(.*)?$/;

  return function(loader) {
    let output = loader,
      matches = output.match(patternWithLoaderAndQuery);
    log('VerboseLoaderFormatFactory.match', loader, matches);
    if (matches) {
      let [result, name, querymark, params] = matches;

      if (name.indexOf('-loader') < 0) {
        name += '-loader';
      }

      if (options.sourceMap) {
        if (!querymark) {
          querymark = '?';
        }
        params = params
          .split('&')
          .filter(param => param && param.length > 0);

        if (!params.includes('sourceMap')) {
          params.push('sourceMap');
        }
        params = params.join('&');
      }

      output = [name, querymark, params]
        .filter((item) => !!item)
        .join('');
    }

    log('VerboseLoaderFormatFactory', loader, ' > ', output);
    return output;
  };
}

/**
 * @description generate full loader strings with optional sourcemaps
 * @param {Object}
 * @returns {Function} Generator
 */
export function SourceLoaderStringFactory(options = {
    sourceMap: true
  }) {
  return function(...loaders) {
    let expander = VerboseLoaderFormatFactory(options),
      sourceLoader = loaders.map(expander);
    log('SourceLoaderString.loaders', loaders, ' > ', sourceLoader);
    return sourceLoader;
  };
}

/**
 * @param {Object}
 */
export function ExtractStyleLoaderFactory(options) {
  return function(...Loaders) {
    let output,
      extracted = options.extract;
    if (extracted) {
      output = ExtractTextPlugin.extract(Loaders);
    } else {
      output = (Array.isArray(Loaders) ? Loaders.join('!') : Loaders);
    }
    log('ExtractStyleLoader.output', Loaders, options, output);
    return output;
  };
}

export function Generate(loaders, options) {
  let SourceMapLoader = SourceLoaderStringFactory(options),
    ExtractLoader = ExtractStyleLoaderFactory(options);
  let output = ExtractLoader(...SourceMapLoader(...loaders));
  log('Generate.output', output);
  return output;
}

/**
 * @param  {Object}
 * @return {Object}
 */
export function GenerateVueCssLoaders(options = {}) {
  let generateSourceLoaders = SourceLoaderStringFactory(options),
    generateExtractor = ExtractStyleLoaderFactory(options);

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateExtractor('vue-style-loader', ...generateSourceLoaders('css')),
    less: generateExtractor('vue-style-loader', ...generateSourceLoaders('css', 'less')),
    sass: generateExtractor('vue-style-loader', ...generateSourceLoaders('css', 'sass?indentedSyntax')),
    scss: generateExtractor('vue-style-loader', ...generateSourceLoaders('css', 'sass')),
    stylus: generateExtractor('vue-style-loader', ...generateSourceLoaders('css', 'stylus')),
    styl: generateExtractor('vue-style-loader', ...generateSourceLoaders('css', 'stylus')),
  };
}