import path from 'path';
import debug from 'debug';
import Config from 'webpack-config';
import webpack from 'webpack';
import StatsPlugin from 'stats-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import Constants from '../constants';
import Env from '../env';

const log = debug(`app.[${Constants.name}]:Build/webpack/base`);


export default new Config()
	.merge({
		entry: {
			app: ['app']
		},

		output: {
				path: '/',
				publicPath: 'static/',
				filename: 'static/js/[name].[chunkhash].js',
				chunkFilename: 'static/js/[id].[chunkhash].js'

		},

		watch: {
			aggregateTimeout: 300,
			poll: true
		},

		// stats: true,
		// profile: true,

		module: {
			loaders: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.html$/,
					loaders: [
						'html-loader'
					]
				},
				{
					test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
					loader: 'url-loader',
					query: {
						limit: 1000,
						name: '[name].[ext]?[hash:7]'
					}
				},
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.json$/,
					loader: 'json'
				},
			]
		},
		resolveLoader: {
			fallback: [path.join(Constants.CWD, 'node_modules')]
		},
		resolve: {
			extensions: ['', '.js'],
			fallback: [path.join(Constants.CWD, 'node_modules')],
			alias: {
				app: path.resolve(Constants.CWD, 'src'),
				// https://github.com/vuejs/vue-loader/issues/287#issuecomment-241372519
				vue: 'vue/dist/vue.js',
			}
		},

		plugins: [
			new webpack.DefinePlugin({
				'process.env': Env
			}),
			// new StatsPlugin('stats.json', {
			// 	chunkModules: true,
			// }),
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				filename: 'index.html'
			}),
		],

		htmlLoader: {
			interpolate: true,
			attrs: ['img:src', 'link:href']
		}

	});
