const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
            presets: ['es2015', 'react'],
        },
      }
    ]
  },

  plugins: [
    HTMLWebpackPluginConfig
  ],

  devServer: {
    quiet: true,
    hot: true,
    port: '8000',
    inline: true,
    historyApiFallback: true,
  }
}