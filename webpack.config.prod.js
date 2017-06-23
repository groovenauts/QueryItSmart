var webpack = require('webpack')
var config = require('./webpack.config.js');

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin()
);

module.exports = config;
