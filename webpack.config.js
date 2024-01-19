const path = require('path')
const webpackMerge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies: deps } = require('./package.json')
const { getRemoteEntry } = require('./config/webpack-utils')

const isDevelopment = process.env.NODE_ENV === 'development'

const baseWebpackConfig = require('./config/webpack.config.base')

module.exports = webpackMerge.merge(baseWebpackConfig, {
	entry: {
		main: './src/main.ts',
	},
	output: {
		publicPath: 'auto',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'),
			favicon: './public/favicon.ico',
			publicPath: '/',
		}),
		new ModuleFederationPlugin({
			name: 'hostApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./HomePage.vue': './src/components/home/home.vue',
			},
			remotes: {
				...getRemoteEntry('exposeApp', isDevelopment),
			},
			shared: {
				...deps,
				vue: {
					eager: true,
					singleton: true,
					requiredVersion: deps['vue'],
				},
				'vue-router': {
					eager: true,
					singleton: true,
					requiredVersion: deps['vue-router'],
				},
			},
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname),
		},
		compress: true,
		port: 3001,
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
		},
	},
})
