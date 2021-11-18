const express = require('express');

const { Short, User, Comment, Like } = require('../db/models');
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
    });
}));

const validate = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please add a title.')
        .isLength({ max: 50 })
        .withMessage('Title cannot be more than 50 characters.'),
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please add content.')
        .isLength({ max: 500 })
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

    if (!errors[0]) {
        short.userId = req.session.auth.userId;
        await short.save();
        res.redirect(`/shorts/${short.id}`)
    } else {
        res.render('shorts-create', {
            title: 'Create User',
            short,
            csrfToken: req.csrfToken(),
            errors
        });
    }
}));

router.get('/', asyncHandler(async (req, res, next) => {
    let userId = 0;
    const shorts = await Short.findAll({
        order: [['updatedAt', 'DESC']],
        limit: 15
    });
    const users = await User.findAll();
    
    if (req.session.auth) userId = req.session.auth.userId;

    res.render('shorts', {
        title: "Shorts",
        shorts,
        userId,
        users
    });
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const shortId = req.params.id;
    const short = await Short.findByPk(shortId);
    const user = await User.findByPk(short.userId);
    let browserId = 0;
    if(req.session.auth) browserId = req.session.auth.userId;
    const comments = await Comment.findAll({
        where: { shortId },
        include: [{ model: User, attributes: ['username'] }],
        order: [['createdAt', 'ASC']]
    })
    const likes = await Like.findAll({
        where: {
            shortId
        }
    });

    const like = await Like.findOne({
        where: {
            shortId,
            userId: browserId
        }
    });
    
    res.render('short-page', {
        title: short.title,
        short,
        username: user.username,
        userId: browserId,
        comments,
        likes,
        like // go to pug
    });
}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const shortId = req.params.id;
    const short = await Short.findByPk(shortId);
    await short.destroy();
    res.send();
}));

const shortValidators = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for short field'),
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for title field')
        .isLength({ max: 50 })
        .withMessage('Title can not be longer than 50 characters'),
];

router.get('/:id(\\d+)/edit', requireAuth, csrfProtection,
    asyncHandler(async (req, res) => {
        const shortId = parseInt(req.params.id, 10);
        const short = await Short.findByPk(shortId);
        const userId = req.session.auth.userId;

        res.render('shorts-edit', {
            title: 'Edit Short',
            short,
            csrfToken: req.csrfToken(),
            userId
        });
    }));

router.post('/:id(\\d+)/edit', requireAuth, shortValidators, csrfProtection,
    asyncHandler(async (req, res) => {
        const shortId = parseInt(req.params.id, 10);
        const shortToUpdate = await Short.findByPk(shortId);

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

        if (validatorErrors.isEmpty()) {
            await shortToUpdate.update(short);
            res.redirect('/');
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render('shorts-edit', {
                title: 'Edit Short',
                short: { ...short, shortId },
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    }));

router.post('/:id(\\d+)/comments', requireAuth, asyncHandler(async (req, res) => {
    const userId = req.session.auth.userId;
    const shortId = req.params.id;
    const { content } = req.body;

    const created = await Comment.create({
        content,
        userId,
        shortId
    });
    const commentId = created.dataValues.id;
    const user = await User.findByPk(userId);
    const username = user.username;

    res.send({
        content,
        username,
        commentId
    })
}));
// likes
router.post('/:id(\\d+)/likes', requireAuth, asyncHandler(async (req, res) => {
    const shortId = parseInt(req.params.id, 10);

    const { userId } = req.session.auth

    const like = await Like.build({
        userId,
        shortId,
    });
    await like.save()
    res.send()
})
);

router.delete('/:id(\\d+)/likes', requireAuth, asyncHandler(async (req, res) => {
    const shortId = parseInt(req.params.id, 10);
    const { userId } = req.session.auth
    const like = await Like.findOne({
        where: {
            userId,
            shortId
        }
    })
    await like.destroy()
    res.send()
})
);


module.exports = router;
