import path from 'path';
import debug from 'debug';
import Config from 'webpack-config';
import webpack from 'webpack';
import StatsPlugin from 'stats-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import * as LoaderStrings from '../../lib/loader-strings';
import Constants from '../constants';
import Env from '../env';

const log = debug(`app.[${Constants.name}]:Build/webpack/base`);


export default new Config()
	.merge({

		entry: {
			app: ['app']
		},

		output: {
				path: path.resolve(Constants.CWD, 'dist'),
				publicPath: '/',
				filename: '[name].[hash:16].js',
				chunkFilename: '[id].[hash:16].js'
		},

		watch: {
			aggregateTimeout: 300,
			poll: true
		},

		stats: true,
		profile: true,

		module: {
			preloaders: [
				{
	        test: /\.(vue|js)$/,
	        loader: 'eslint-loader',
	        include: path.join(Constants.CWD, 'src'),
	        exclude: /node_modules/
				}
			],
			loaders: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.css$/,
					loader: 'style-loader'
				},
				{
					test: /\.js$/,
					loader: 'babel-loader',
					include: path.join(Constants.CWD, 'src'),
					exclude: /node_modules/,
				},
				{
					test: /\.json$/,
					loader: 'json'
				},
				{
					test: /\.scss$/,
					loader: 'sass-loader'
				},
				{
					test: /\.html$/,
					loaders: [
						'html-loader'
					]
				},
				{
					test: /\.(png|jpg|gif|svg)(\?.*)?$/,
					loader: 'url-loader',
					query: {
						limit: 1000,
						name: 'static/img/[name].[ext]?[hash:7]'
					}
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					loader: 'url-loader',
					query: {
						limit: 1000,
						name: 'static/fonts/[name].[ext]?[hash:7]'
					}
				},
			]
		},

		resolveLoader: {
			fallback: [path.join(Constants.CWD, 'node_modules')]
		},

		resolve: {
			extensions: ['', '.js', '.vue'],
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
			new StatsPlugin('stats.json', {
				chunkModules: true,
			}),
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				filename: 'index.html',
				inject: true,
			}),
		],

		vue: {
			loaders: Object.assign(LoaderStrings.css(), {
				js: 'isparta'
			})
		},

		htmlLoader: {
			interpolate: true,
			attrs: ['img:src', 'link:href']
		},

		eslint: {
		  formatter: require('eslint-friendly-formatter')
		},

	});
