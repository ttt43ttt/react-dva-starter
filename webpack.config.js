const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');

const NODE_ENV = process.env.NODE_ENV || 'development';
const { ifProduction, ifDevelopment } = getIfUtils(NODE_ENV);

const definePluginVars = {
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  'process.env.DEVELOPMENT': JSON.stringify(ifDevelopment(true, false))
};

module.exports = {
  mode: NODE_ENV,
  entry: {
    app: removeEmpty([
      '@babel/polyfill',
      // ifDevelopment("react-hot-loader/patch"),
      ifDevelopment('webpack-hot-middleware/client'),
      './src/index.js'
    ])
  },
  output: {
    path: path.resolve(__dirname, 'build/dist'),
    publicPath: '/',
    filename: 'app-[hash].js',
    chunkFilename: '[id].bundle-[chunkhash].js'
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: './build/babel_cache'
          }
        }
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'src')],
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },

  plugins: removeEmpty([
    ifDevelopment(new webpack.HotModuleReplacementPlugin()),
    new webpack.DefinePlugin(definePluginVars),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]),

  devtool: ifDevelopment('source-map')
};
