var webpack = require("webpack");
var webpackDevServer = require('webpack-dev-server');
var path = require('path');
var baseConfig = require('../config/webpack.config.dist');

var port = 8085;
var serverURI = `webpack-dev-server/client?http://localhost:${port}/`;

var examplesConfig = baseConfig();
delete examplesConfig.output.library;
examplesConfig.context = path.resolve(__dirname, '../');
examplesConfig.output.filename = "main.js";
examplesConfig.output.path = "/";
examplesConfig.output.publicPath = '/script/';
examplesConfig.entry = [serverURI, 'babel-polyfill', './example/main.js'];
examplesConfig.resolve.alias = {
	fontpainter: path.resolve(__dirname, '../src')
};
examplesConfig.module.loaders.push({
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'babel-loader',
	query: {
		presets: ['es2015']
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
examplesConfig.watch = true;
examplesConfig.progress = true;
examplesConfig.keepalive = true;

var compiler = webpack(examplesConfig);
var server = new webpackDevServer(compiler, {
	contentBase: "example/",
	publicPath: examplesConfig.output.publicPath,
	stats: {
		colors: true,
		chunks: false
	}
});

server.listen(port, function(err) {
	if (err) {
		console.log(err);
		return
	}
	console.log(`Listening at http://localhost:${port}\n`);
});
