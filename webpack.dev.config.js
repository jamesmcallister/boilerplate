var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  devServer: {
  stats: 'minimal',
  hot: true,
  historyApiFallback: true
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
    loaders: [
      {test: /\.md$/, loader: "html!markdown?gfm=false" },
      {test: /\.js$/, loaders: ['babel-loader'], include: path.join(__dirname, 'src')},
      {test: /\.css$/, loader: "style-loader!css-loader!postcss-loader"}
      ]
  },
  postcss: function () {
        return [precss, autoprefixer];
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
      title: 'YAB',
      filename: 'index.html',
       minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true
      }
    })
  ]
};
