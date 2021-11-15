const bcrypt = require('bcrypt');
const csrf = require('csurf');
const csrfProtection = csrf({cookies: true});

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

module.exports = {csrfProtection, asyncHandler, bcrypt}
