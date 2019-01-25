const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const autoprefixer = require('autoprefixer');

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
    filename: ifProduction('app-[hash].js', 'app.js'),
    chunkFilename: ifProduction('[id].bundle-[chunkhash].js', '[id].bundle.js')
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
      // CSS
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: ifProduction(MiniCssExtractPlugin.loader, 'style-loader')
          },
          {
            loader: 'css-loader',
            options: {
              modules: true // use CSS modules only for files in src folder
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'src')],
        use: [ifProduction(MiniCssExtractPlugin.loader, 'style-loader'), 'css-loader']
      },
      // LESS
      {
        test: /\.less$/,
        use: [
          {
            loader: ifProduction(MiniCssExtractPlugin.loader, 'style-loader') // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer]
            }
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              // modifyVars: {
              //   'primary-color': '#1DA57A',
              //   'link-color': '#1DA57A',
              //   'border-radius-base': '2px'
              // },
              javascriptEnabled: true
            }
          }
        ]
      },
      // images
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: removeEmpty([
    ifProduction(new CleanWebpackPlugin(['build/dist'])),
    ifProduction(
      new MiniCssExtractPlugin({
        filename: '[name]-[hash].css',
        chunkFilename: '[id].[hash].css'
      })
    ),
    ifDevelopment(new webpack.HotModuleReplacementPlugin()),
    new webpack.DefinePlugin(definePluginVars),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]),

  devtool: ifDevelopment('source-map')
};
