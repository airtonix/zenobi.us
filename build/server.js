import jsonfile from 'jsonfile';
import debug from 'debug';
import jsonServer from 'json-server';
import serveIndex from 'serve-index';
import morgan from 'morgan';
import express from 'express';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import ConnectHistoryApiFallback from 'connect-history-api-fallback'
import config from './config/webpack';
import Constants from './config/constants';

const log = debug(`app.[${Constants.name}]:Build/Server`);

/**
 * Server
 * @type {Express}
 */
let server = express();

process.on('SIGTERM', (code) => {
	log('SIGTERM');
	if (server) { server.close(); }
	process.exit();
});
/**
 * Wepack Compiler
 * @type {Function}
 */
const webpackCompiler = webpack(config);
const webpackDevMiddlewareInstance = webpackDevMiddleware(webpackCompiler, {
	publicPath: config.output.publicPath,
	stats: {
		colors: true,
		chunks: false
	}
});
const webpackkHotMiddlewareInstance = webpackHotMiddleware(webpackCompiler);
webpackCompiler.plugin('compilation', (compilation) => {
	compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
		webpackkHotMiddlewareInstance.publish({action: 'reload'});
		cb();
	});
});

/**
 * Server Middleware
 */
server.use('/api', jsonServer.defaults());
server.use('/api', jsonServer.router(config.database.path));
server.use(morgan('dev'));
server.use(ConnectHistoryApiFallback());
server.use(webpackDevMiddlewareInstance)
server.use(webpackkHotMiddlewareInstance);


/**
 * @param  {Number} 	Port
 * @param  {Function}	Callback
 */
export default new Promise( (resolve, reject) => {
	const instance = server.listen(config.server.port, () => {
		log(`server running on ${config.server.port}`);
		resolve({
			instance,
			server
		});
	});
});