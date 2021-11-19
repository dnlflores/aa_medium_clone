'use strict';

module.exports = (sequelize, DataTypes) => {
  const Short = sequelize.define('Short', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Short.associate = function(models) {
    Short.hasMany(models.Comment, {
      foreignKey: 'shortId',
      onDelete: 'CASCADE',
      hooks: true
    });
    Short.hasMany(models.Like, {
      foreignKey: 'shortId',
      onDelete: 'CASCADE',
      hooks: true
    });
    Short.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Short;
};