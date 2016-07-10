var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: ['./src/index'],
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: __dirname + '/../dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader'], include: path.join(__dirname, '../src')},
      {test: /\.css$/, loader: "style-loader!css-loader!postcss-loader"}
      ]
  },
    postcss: function () {
        return [precss, autoprefixer];
    },
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
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
