const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/when.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template : './index.html',
      inject: 'head'
    })
  ],
  output: {
    filename: 'when.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'When',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  }
};