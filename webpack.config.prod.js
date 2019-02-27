var webpack = require('webpack')
var config = require('./webpack.config.js');

config.mode = 'production';
config.plugins.push(
  new webpack.optimize.OccurrenceOrderPlugin()
);
config.optimization = {
  minimize: true
};

module.exports = config;
