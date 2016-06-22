/* eslint consistent-return:0 */

const express = require('express');
const path = require('path');
const logger = require('./logger');
const ngrok = require('ngrok');
const bodyParser = require('body-parser');
const frontend = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const useTunnel = isDev && process.env.ENABLE_TUNNEL;
const app = express();
const api = require('./api');
const passport = require('passport');

app.use(express.static(path.resolve(__dirname, '../app/static')));
const webpackConfig = isDev
  ? require('../internals/webpack/webpack.dev.babel')
  : require('../internals/webpack/webpack.prod.babel');


const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
// If you need a backend, e.g. an API, add your custom backend-specific middleware here
app.use('/api', api);

// Initialize frontend middleware that will serve your JS app
app.use(frontend(webpackConfig));

const port = process.env.PORT || 9091;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (isDev && useTunnel) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, url);
    });
  } else {
    logger.appStarted(port);
  }
});
