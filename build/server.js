import jsonfile from 'jsonfile';
import debug from 'debug';
import jsonServer from 'json-server';
import serveIndex from 'serve-index';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from "webpack-hot-middleware";

import config from './config/webpack';
import Constants from './config/constants';

const log = debug(`app.[${Constants.name}]:Build/Server`);

/**
 * Server
 * @type {Express}
 */
const server = jsonServer.create(),
	router = jsonServer.router(config.database.path),
	middleware = jsonServer.defaults({
		static: config.output.path
	});
log('loading json.db', config.database.path);

/**
 * Wepack Compiler
 * @type {Function}
 */
const webpackCompiler = webpack(config);
const webpackDevMiddlewareInstance = webpackDevMiddleware(webpackCompiler, {
	publicPath: config.output.publicPath,
	stats: { color: true},
	quiet: true
});

/**
 * Server Middleware
 */
server.use(webpackDevMiddlewareInstance)
server.use(webpackHotMiddleware(webpackCompiler));
server.use(serveIndex(config.output.path))
server.use(middleware);
server.use('/api', router);


/**
 * @param  {Number} 	Port
 * @param  {Function}	Callback
 */
server.listen(config.server.port, () => {
	log('server running');
});


process.on('exit', () => server.close);
process.on('SIGINT', () => server.close);
process.on('uncaughtException', () => server.close);