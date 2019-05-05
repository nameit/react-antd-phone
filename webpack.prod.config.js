const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const scssMini = new MiniCssExtractPlugin()

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
    chunkFilename: 'js/[name].[chunkhash:8].bundle.js'
  },
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [["import", { libraryName: "antd-mobile", style: "css" }], 'syntax-dynamic-import']
          }
        }, {
          loader: 'eslint-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader', {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('autoprefixer')]
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',{
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('autoprefixer')]
          }
        }, 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      title: '新疆征管三期app'
    }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  }
}