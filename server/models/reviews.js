const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Reviews = sequelize.define("Reviews", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  press: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Reviews;
// module.exports = sequelize;
