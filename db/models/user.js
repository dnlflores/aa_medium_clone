'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Short, {
      foreignKey: 'userId'
    });
    User.hasMany(models.Comment, {
      foreignKey: 'userId'
    });
    User.hasMany(models.Like, {
      foreignKey: 'userId'
    });
    User.belongsToMany(models.User, {
      through: 'Follow',
      foreignKey: 'followId',
      as: 'followedId'
    });
    User.belongsToMany(models.User, {
      through: 'Follow',
      foreignKey: 'followedId',
      as: 'followId'
    });
  };
  return User;
};