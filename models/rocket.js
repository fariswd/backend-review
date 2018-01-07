'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rocket = sequelize.define('Rocket', {
    name: DataTypes.STRING,
    img: DataTypes.TEXT,
    desc: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rocket;
};