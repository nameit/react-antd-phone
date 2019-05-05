const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*** happypack modules start  ***/
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
/*** happypack modules end  ***/

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js'
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    port: 3008,
    contentBase: path.resolve(__dirname, 'build')
  },
  module: {
    rules:[
      {
        test: /\.jsx?$/,
        use: 'happypack/loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('autoprefixer')]
          }
        }]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [require('autoprefixer')]
          }
        }, 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      title: '新疆征管三期app'
    }),
    new HappyPack({
      loaders: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [["import", { libraryName: "antd-mobile", style: "css" }], 'syntax-dynamic-import']
        }
      }, {
        loader: 'eslint-loader'
      }],
      threadPool: happyThreadPool,
      threads: 4
    })
  ]
}