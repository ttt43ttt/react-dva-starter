const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

const app = express();
const compiler = webpack(webpackConfig);

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const historyMidleware = require("connect-history-api-fallback")();

const webpackDevMidleware = require("webpack-dev-middleware")(compiler, {
  reload: true,
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
});

const webpackHotMidleware = require("webpack-hot-middleware")(compiler);

app.use(historyMidleware);
app.use(webpackDevMidleware);
app.use(webpackHotMidleware);

// const staticAssets = express.static(path.join(__dirname, "assets"));
// app.use("/", staticAssets);

app.listen(port, host, error => {
  if (error) {
    console.error(error);
    return;
  }
  console.info(
    "Listening on %s. Open http://%s:%s/ in your browser.",
    port,
    host,
    port
  );
});
