const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//separate it to dev webpack config
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');

const dashboard = new Dashboard()

const { NODE_ENV } = process.env;
const isProd = () => NODE_ENV === 'production';

module.exports = {
  entry: ['./src/index.js'],
  output: {
    chunkFilename: 'js/[name]_[hash].js',
    filename: 'js/[name]_[hash:8].bundle.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.styl', '.css'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
            presets: ['react'],
        },
      },

      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer'),
                  require('postcss-discard-duplicates'),
                  require('postcss-discard-unused')(),
                ],
              },
            },
            {
              loader: 'stylus-loader',
            },
          ],
        }),
      },
      
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
      filename: 'js/[name]_[hash].js',
    }),
    
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    new ExtractTextPlugin({
      //disable: !isProd(),
      filename: 'css/[name]_[contenthash].css',
      allChunks: true,
    }),

    //separate this two plugins to dev webpack config
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(dashboard.setData),
  ],

  //separate it to dev webpack config
  devServer: {
    quiet: true,
    hot: true,
    port: '8000',
    inline: true,
    historyApiFallback: true,
  }
}