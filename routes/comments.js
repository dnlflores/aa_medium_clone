const express = require('express');

const { Short, User, Comment } = require('../db/models');
const { check, validationResult } = require('express-validator');

const { asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();

const clients = [];

router.ws('/', async (ws, req) => {
    const connection = ws;
    clients.push(connection);

    ws.on('message', function(data) {
        console.log('message from client recieved');
    });

    connection.on('message', function(data) {
            //broadcast the message to all the clients
        clients.forEach(function(client) {
            client.send(data);
        });
    });
    //ws.send('hello from server');
});

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
    await comment.destroy();
    res.send();
}));

module.exports = router;