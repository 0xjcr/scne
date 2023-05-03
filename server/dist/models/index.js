"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const { NODE_ENV } = process.env;
const sequelize = new sequelize_1.Sequelize(
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
exports.default = sequelize;
