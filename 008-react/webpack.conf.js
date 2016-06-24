const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = path.resolve(__dirname, 'src');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(root, 'app.js'),
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory',
      },
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: '/',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
  resolve: {
    root: root,
    extensions: ['', '.js', '.jsx'],
  },
}
