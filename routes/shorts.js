const express = require('express');

const { Short } = require('../db/models');
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
        res.redirect(`/shorts/${short.userId}`)
    } else {
        res.render('shorts-create', {
            title: 'Create User',
            short,
            csrfToken: req.csrfToken(),
            errors
        })
    }

}));

module.exports = router;