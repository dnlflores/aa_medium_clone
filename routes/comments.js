const express = require('express');

const { Short, User, Comment } = require('../db/models');
const { check, validationResult } = require('express-validator');

const { asyncHandler, csrfProtection } = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();

router.use(express.json());

router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const {  }
}));

router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {

}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {

}));

module.exports = router;