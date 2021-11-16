'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    followId: DataTypes.INTEGER,
    followedId: DataTypes.INTEGER
  }, {});
  Follow.associate = function(models) {
  };
  return Follow;
};