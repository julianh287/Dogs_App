const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('temperament', {
    id: {
      type: DataTypes.INTEGER, //UUID?
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};