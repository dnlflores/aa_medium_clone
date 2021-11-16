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
    User.belongsToMany(models.Follow, {
      through: 'Follow',
      foreignKey: 'followId',
      otherKey: 'followedId'
    });
  };
  return User;
};