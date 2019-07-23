const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/index.js',
  mode: isProd ? 'production' : 'development',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle-[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tic Tac Toe',
      template: './src/index.html',
    })
  ],
  module: {
    rules: [
      {
	test: /\.m?js$/,
	exclude: /(node_modules|bower_components)/,
	use: {
	  loader: 'babel-loader'
	}
      }
    ]
  }
}
