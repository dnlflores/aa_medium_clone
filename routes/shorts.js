const express = require('express');
const router = express.Router();

const { Short, User } = require('../db/models');
const { check, validationResult } = require('express-validator');

const { asyncHandler, csrfProtection, bcrypt } = require('./utils');

router.get('/', asyncHandler(async (req, res, next) => {
    const shorts = await Short.findAll({
        order: [['updatedAt', 'DESC']],
        limit: 15
    });
    res.render('shorts', {
        title: "Shorts",
        shorts
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

// router.post('/:id(\\d+)/delete');

module.exports = router;