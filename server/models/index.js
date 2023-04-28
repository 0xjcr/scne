const { Sequelize } = require("sequelize");

const { NODE_ENV } = process.env;

// Setup database connection first
// Initialize Sequelize with connection details
<<<<<<< HEAD
const sequelize = new Sequelize(
  NODE_ENV !== "TESTING" ? "scne" : "scene_test",
  "rosiedyvig",
  "",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    logging: false,
  }
);
=======
const sequelize = new Sequelize("scne", "jamesbratton", "", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  logging: false,
});
>>>>>>> 9937bbe (implemented some tests)

module.exports = sequelize;
