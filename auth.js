const { User } = require('./db/models')

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

const restoreUser = async (req, res, next) => {
  
  console.log(req.session);

  if (req.session.auth) {
    const { userId } = req.session.auth;
    if(userId) {
      try {
        const user = await User.findByPk(userId);
  
        if (user) {
          res.locals.authenticated = true;
          res.locals.user = user;
          next();
        }
      } catch (err) {
        res.locals.authenticated = false;
        next(err);
      }
    } else {
      res.locals.authenticated = false;
      next();
    }

  } else {
    res.locals.authenticated = false;
    next();
  }
};

module.exports = {
  loginUser,
  restoreUser,
};
