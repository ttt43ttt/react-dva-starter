const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");

const NODE_ENV = process.env.NODE_ENV || "development";
const { ifProduction, ifDevelopment } = getIfUtils(NODE_ENV);

module.exports = {
  mode: NODE_ENV,
  entry: {
    app: removeEmpty([
      "@babel/polyfill",
      ifDevelopment("react-hot-loader/patch"),
      ifDevelopment("webpack-hot-middleware/client"),
      "./src/index.js"
    ])
  },
  output: {
    path: path.resolve(__dirname, "build/dist"),
    publicPath: "/",
    filename: "app-[hash].js",
    chunkFilename: "[id].bundle-[chunkhash].js"
  },

  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: "./build/babel_cache"
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },

  plugins: removeEmpty([
    ifDevelopment(new webpack.HotModuleReplacementPlugin()),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]),

  devtool: ifDevelopment("source-map")
};
