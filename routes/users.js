var express = require('express');
var router = express.Router();
const { User } = require('../db/models')

const { asyncHandler, csrfProtection } = require('./utils')
/* GET users listing. */

router.get('/register', csrfProtection, asyncHandler(async function(req, res, next) {
  const user = User.build()
  res.render('user-create',{
    user,
    title: 'Register',
    csrfToken: req.csrfToken()
  });
}));

module.exports = router;
