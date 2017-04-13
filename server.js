
// Setup express server and webpack middleware
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

// serve static file

app.use(express.static(__dirname + '/www'));

// setup root? Study this object...
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

const server = app.listen(3000,function(){
	const host = server.address().address;
	const port = server.address().port;
	console.log('SandBoxSpring17 listening at http://%s:%s',host,port);
});