var path = require('path');

var config = {
  entry: path.resolve(__dirname, './public/app.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
    /* js的发布路径 */
    publicPath: '/dist'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      /* 这里只配置 css 文件的编写方式 */
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}

module.exports = config;