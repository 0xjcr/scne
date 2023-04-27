const { Sequelize } = require("sequelize");

// Setup database connection first
// Initialize Sequelize with connection details
const sequelize = new Sequelize("scne", "jamesbratton", "", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false,
});

module.exports = sequelize;
