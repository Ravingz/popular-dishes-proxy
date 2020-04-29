const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index:'./client/src/index.jsx'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        include: __dirname + '/client/src',
        loader: 'babel-loader',
        test: /\.jsx?$/,
        // exclude: /node_modules/,
      },
    ],
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: 'client/src/index.html',
      filename: 'index.html',
      inject: true, 
      chunks: ['index']
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devServer: {
    hot: true,
    port: 9000
  }
};