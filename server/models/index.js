const { Sequelize } = require("sequelize");

const { NODE_ENV } = process.env;

// Setup database connection first
// Initialize Sequelize with connection details

const sequelize = new Sequelize(
  NODE_ENV !== "TESTING" ? "scne" : "scene_test",
  "jamesbratton",
  "",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    logging: false,
  }
);

module.exports = sequelize;
