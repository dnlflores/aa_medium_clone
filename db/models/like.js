'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER,
    shortId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Like.belongsTo(models.Short, {
      foreignKey: 'shortId'
    });
  };
  return Like;
};
