const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Scenes = sequelize.define("Scenes", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Scenes;
