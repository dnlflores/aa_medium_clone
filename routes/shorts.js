const express = require('express');

const { Short, User } = require('../db/models');
const { check, validationResult } = require('express-validator');

const { asyncHandler, csrfProtection } = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();

router.get('/create', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const short = await Short.build();
    res.render('shorts-create', {
        title: 'Create User',
        short,
        csrfToken: req.csrfToken()
    })
}));

const validate = [
    check('title')
        .exists({checkFalsy: true})
        .withMessage('Please add a title.')
        .isLength({max: 50})
        .withMessage('Title cannot be more than 50 characters.'),
    check('content')
        .exists({checkFalsy: true})
        .withMessage('Please add content.')
        .isLength({max: 500})
        .withMessage('Content cannot be more than 500 characters.'),
];

router.post('/create', csrfProtection, validate, requireAuth, asyncHandler(async (req, res) => {
    const {
        title,
        content
    } = req.body;

    const short = await Short.build({
        title,
        content
    });

    const validData = validationResult(req);

    const errors = validData.array().map(error => error.msg);

    if(!errors[0]) {
        // const { userId } = req.session.auth
        console.log(req.session.auth.userId)
        short.userId = req.session.auth.userId;
        await short.save();
        res.redirect(`/shorts/${short.id}`)
    } else {
        res.render('shorts-create', {
            title: 'Create User',
            short,
            csrfToken: req.csrfToken(),
            errors
        })
    }
}));

router.get('/', asyncHandler(async (req, res, next) => {
    const shorts = await Short.findAll({
        order: [['updatedAt', 'DESC']],
        limit: 15
    });

    const userId  = req.session.auth.userId;

    res.render('shorts', {
        title: "Shorts",
        shorts,
        userId
    });
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const shortId = req.params.id;
    const short = await Short.findByPk(shortId);
    const user = await User.findByPk(short.userId);
    res.render('short-page', {
        title: short.title,
        short,
        username: user.username
    });
}));

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
    err.status = 403;
    throw err;
  }
};

router.get('/edit/:id(\\d+)', requireAuth, csrfProtection,
  asyncHandler(async (req, res) => {
    const shortId = parseInt(req.params.id, 10);
    const short = await Short.findByPk(shortId);

    checkPermissions(short, res.locals.user);

    res.render('shorts-edit', {
      title: 'Edit Short',
      short,
      csrfToken: req.csrfToken(),
    });
  }));

router.post('/edit/:id(\\d+)', requireAuth, shortValidators, csrfProtection,
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

// router.post('/:id(\\d+)/delete');

module.exports = router;
