/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = function()
{
	return {
		resolve: {
			extensions: ['', '.ts', '.js']
		},

		entry: './src/bundle.ts',

		output: {
			library: "FontPainter"
		},

		module: {
			loaders: [
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					loader: 'awesome-typescript-loader',
					query: {
						configFileName: './config/tsconfig.webpack.json'
					}
				}
			]
		},

		plugins: [],
		stats: {
			colors: true
		}
	};
};
