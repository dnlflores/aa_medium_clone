const express = require('express');

const { Short, User, Comment } = require('../db/models');
const { check, validationResult } = require('express-validator');

const { asyncHandler, csrfProtection } = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();


router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {

}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const commentId = req.params.id;
    const comment = await Comment.findByPk(commentId);
    await comment.destroy();
    res.send();
}));

module.exports = router;