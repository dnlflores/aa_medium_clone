var express = require('express');
var router = express.Router();
const { User, Short } = require('../db/models');
const { check, validationResult } = require('express-validator');

const { asyncHandler, csrfProtection, bcrypt } = require('./utils');

const { loginUser, logoutUser } = require('../auth')


/* GET users listing. */
router.get('/register', csrfProtection, asyncHandler(async function (req, res, next) {
  const user = await User.build();
  res.render('user-create', {
    user,
    title: 'Register',
    csrfToken: req.csrfToken()
  });
}));

const userValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a username.')
    .isLength({ max: 50 })
    .withMessage('Username must be fewer than 50 characters')
    .custom((value) => {
      return User.findOne({ where: { username: value } }).then(
        (user) => {
          if (user) {
            return Promise.reject(
              "The provided Username is already in use by another account"
            );
          }
        }
      );
    }),
  check('email')
    .isEmail()
    .withMessage('Enter a valid email.')
    .exists({ checkFalsy: true })
    .withMessage('Please enter an email.')
    .isLength({ max: 255 })
    .withMessage('Email cannot be longer than 255 characters')
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then(
        (user) => {
          if (user) {
            return Promise.reject(
              "The provided Email is already in use by another account"
            );
          }
        }
      );
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a password.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, "g")
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")')
    .isLength({ max: 50, min: 8 })
    .withMessage('Password cannot be longer than 50 or shorter than 8 characters.'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a password to confirm.')
    .custom((value, { req }) => {
      if(value !== req.body.password) return false;
      else return true;
    })
    .withMessage('Passwords must match.')
];

router.post('/register', csrfProtection, userValidators, asyncHandler(async function (req, res) {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.build({
    username,
    email
  });
  const validatorCheck = validationResult(req);
  const errors = validatorCheck.array().map(error => error.msg);
  if(!errors[0]) {
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req,res,user)
    
  } else {
    res.render('user-create', {
      user,
      title: 'Register',
      errors,
      csrfToken: req.csrfToken()
    });
  }
}));

router.get('/login', csrfProtection, asyncHandler(async function (req, res, next) {
  const user = await User.build();
  res.render('user-login', {
    user,
    title: 'Login',
    csrfToken: req.csrfToken()
  });
}));

const userLoginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Must include an email.')
    .custom(value => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (!user) {
          return Promise.reject(
            "'Login credentials invalid.'"
          );
        }
      }
    )}),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.')
];


router.post('/login', csrfProtection, userLoginValidators, asyncHandler(async function (req, res) {
  const { email, password } = req.body;
  const foundUser = await User.findOne({ where: { email } })

  const user = {
    email
  };


  const validatorCheck = validationResult(req);
  const errors = validatorCheck.array().map(error => error.msg);

  if(!errors[0]) {
    const hashedPassword = foundUser.hashedPassword;
    const passwordTest = await bcrypt.compare(password, hashedPassword);
    if(passwordTest) {
      loginUser(req,res, foundUser)
      // return res.redirect('/');
    } else {
      errors.push('Login credentials invalid.')
    }
    //TO-DO
  }
  if(errors[0]) {
    res.render('user-login', {
      user,
      title: 'Login',
      errors,
      csrfToken: req.csrfToken()
    });
  }
}));

router.post('/logout', (req, res) => {
  logoutUser(req, res);
});

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const user = await User.findByPk(req.params.id);
  const shorts = await Short.findAll({
    where: {
      userId: user.id
    }
  });
  
  res.render('profile-page', {
    title: `${user.username} Profile Page`,
    user,
    shorts,
    userId: user.id
  });
}));

module.exports = router;
