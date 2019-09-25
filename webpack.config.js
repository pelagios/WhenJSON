const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/when.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  output: {
    filename: 'when.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'When',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};