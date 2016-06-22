const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Account = require('./models/account');

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
mongoose.connect('mongodb://localhost/myblog');



router.post('/register', (req, res) => Account.register(
  new Account({ username: req.body.username }),
  req.body.password,
  (err, account) => {
    if (err) {
      console.log(req.body.username);
      console.log(req.body.passpord);
      console.log(err);
      return res.send(JSON.stringify({ account }));
    }
    passport.authenticate('local')(req, res, () => {
      console.log(req.body.username);
      console.log(req.body.password);
      console.log('yes!!!!');
      return res.send(JSON.stringify({ account }));
    });
  }
));
router.post('/login',
  passport.authenticate('local'),
  (req, res) => res.send(JSON.stringify({ username: req.body.username })));
router.get('/logout',
  (req, res) => {
    req.logout();
    res.send(JSON.stringify({ logout: true }));
  });
router.get('/ping', (req, res) =>
    res.status(200).send('pong!')
);
module.exports = router;
