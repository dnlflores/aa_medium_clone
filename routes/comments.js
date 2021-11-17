const express = require('express');

const { Short, User, Comment } = require('../db/models');
const { check, validationResult } = require('express-validator');

const { asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();


router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    
    const commentId = parseInt(req.params.id);
    const userId = req.session.auth.userId;
    const { content } = req.body;
   
    const comment = await Comment.findByPk(commentId);

    comment.content = content;
    
    try{
        await comment.save();
    } catch(err) {
        console.log(err)
    }
    
    const user = await User.findByPk(userId);
    const username = user.username;
   
    res.send({
        content,
        username
    })
}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const commentId = req.params.id;
    const comment = await Comment.findByPk(commentId);
    console.log(comment)
    await comment.destroy();
    res.send();
}));

module.exports = router;