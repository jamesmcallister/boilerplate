var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
  devServer: {
  stats: 'minimal',
  hot: true
},
  devtool: 'eval',
  entry: {
    app: ['./src/index',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      ],
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [
        'babel-loader'],
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'chunk',
      filename: 'chunked.js'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      inject: false,
      template: __dirname + '/index.html',
      appMountId: 'app',
      title: 'Boilerplate ',
      filename: 'index.html',
       minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true
      }
    })
  ]
};
