const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const config = {
  host: "localhost",
  dialect: "postgres",
  logging: console.log,
};

const sequelize = new Sequelize(
  "codeworks-db",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  config
);

module.exports = sequelize;
