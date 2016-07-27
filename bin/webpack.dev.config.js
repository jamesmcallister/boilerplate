var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var precss = require('precss')
var autoprefixer = require('autoprefixer')
var NpmInstallPlugin = require('npm-install-webpack-plugin')

module.exports = {
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  devtool: 'eval',
  entry: {
    app: ['./src/index',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    ]
  },
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['babel-loader'], include: path.join(__dirname, '../src')},
      {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'}
    ]
  },
  postcss: function () {
    return [precss, autoprefixer]
  },
  plugins: [
    new NpmInstallPlugin({dev: 'save'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      inject: false,
      template: path.join(__dirname, '/index.html'),
      appMountId: 'app',
      title: 'Seth McAllister | Awesomeness starts here!!',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true
      }
    })
  ]
}
