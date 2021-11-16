const express = require('express');
const { check, validationResult } = require("express-validator");
const { asyncHandler, csrfProtection } = require("./utils");
const { requireAuth } = require('../auth')

const router = express.Router();

const shortValidators = [
  check('shorts')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for short field'),
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for title field')
    .isLength({ max: 50 })
    .withMessage('Title can not be longer than 50 characters'),
];

const checkPermissions = (short, currentUser) => {
  if (short.userId !== currentUser.id) {
    const err = new Error('Illegal operation.');
    err.status = 403; // Forbidden
    throw err;
  }
};

router.get('/short/edit/:id(\\d+)', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const shortId = parseInt(req.params.id, 10);
    const short = await db.Short.findByPk(shortId);

    checkPermissions(short, res.locals.user);

    res.render('shorts-edit', {
      title: 'Edit Short',
      short,
      csrfToken: req.csrfToken(),
    });
  }));

router.post('/book/edit/:id(\\d+)', requireAuth, shortValidators, csrfProtection,
  asyncHandler(async(req, res) => {
  const shortId = parseInt(req.params.id, 10);
  const shortToUpdate = await db.Short.findByPk(shortId);

  checkPermissions(shortToUpdate, res.locals.user);

  const {
    title,
    content,
    userId
  } = req.body;

  const short = {
    title,
    content,
    userId
  };

  const validatorErrors = validationResult(req);

  if(validatorErrors.isEmpty()){
    await shortToUpdate.update(short);
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error)=>error.msg);
    res.render('shorts-edit', {
      title: 'Edit Short',
      short: { ...short, shortId},
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}));


module.exports = router;
