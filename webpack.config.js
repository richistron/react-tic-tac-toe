const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    })
  ]
}