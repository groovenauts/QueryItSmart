var webpack = require('webpack')
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './assets'),
    filename: 'app.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.(png|wav)$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        loader: "url-loader?mimetype=image/svg+xml"
      },
    ]
  },
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.jsx', 'index.js', '.json'],
    modules: ["node_modules"]
  },
  plugins: [],
}
