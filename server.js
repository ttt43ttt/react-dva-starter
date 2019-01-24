const path = require('path');
const express = require('express');
const webpack = require('webpack');
const signale = require('signale');
const webpackConfig = require('./webpack.config');

const app = express();
const compiler = webpack(webpackConfig);

const port = process.env.PORT || 8000;
const host = process.env.HOST || 'localhost';

const historyMiddleware = require('connect-history-api-fallback')();

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  reload: true,
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
});

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

// mock api
const mockJsMiddleware = require('./scripts/express-mockjs-middleware')(
  path.resolve(__dirname, 'mock')
);

app.use(mockJsMiddleware);
app.use(historyMiddleware);
app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

// const staticAssets = express.static(path.join(__dirname, "assets"));
// app.use("/", staticAssets);

app.listen(port, host, error => {
  if (error) {
    signale.error(error);
    return;
  }
  signale.info('Listening on %s. Open http://%s:%s/ in your browser.', port, host, port);
});
