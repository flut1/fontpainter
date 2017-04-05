var webpack = require("webpack");
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var baseConfig = require('./webpack.config.dist.js');

var examplesConfig = baseConfig();
delete examplesConfig.output.library;
examplesConfig.context = path.resolve(__dirname, '../');
examplesConfig.output.filename = "main.js";
examplesConfig.output.path = "docs/demo";
examplesConfig.entry = ['babel-polyfill', './example/main.js'];
examplesConfig.resolve.alias = {
	fontpainter: path.resolve(__dirname, '../src')
};
examplesConfig.plugins.push(
	new CopyWebpackPlugin([{
		from: 'example/index.html',
		to: 'index.html'
	}])
);
examplesConfig.module.loaders.push({
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'babel-loader',
	query: {
		presets: ['es2015'],
		plugins: ['transform-class-properties']
	}
});
examplesConfig.module.loaders.push({
	test: /\.scss$/,
	loaders: ['style-loader', 'css-loader', 'sass-loader'],
});
examplesConfig.module.loaders.push({
	test: /\.(svg|woff2?|ttf|svg|eot)$/,
	loaders: ['file-loader'],
});
examplesConfig.devtool = 'source-map';
examplesConfig.progress = true;

module.exports = examplesConfig;
