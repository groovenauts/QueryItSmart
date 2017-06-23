var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './assets/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|wav)$/,
        loader: 'file-loader'
      }      
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'index.js', '.json'],
    modules: ["node_modules"]
  },
  devtool: 'inline-source-map',
  plugins: [],
}
