var express = require('express');
var router = express.Router();
const { User } = require('../db/models');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  if (res.locals.authenticated) {
    const user = await User.findByPk(req.session.auth.userId);
    res.render('index', { title: 'Welcome To Shorts!', user });
  } else res.render('index', { title: 'Welcome To Shorts!' });
}));

module.exports = router;
