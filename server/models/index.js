const { Sequelize } = require('sequelize');

// Setup database connection first
// Initialize Sequelize with connection details
const sequelize = new Sequelize("scneTest", "jordan", "", {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
  });

  module.exports = sequelize;