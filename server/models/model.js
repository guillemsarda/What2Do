const { Sequelize } = require("sequelize");

const config = {
  host: "localhost",
  dialect: "postgres",
  logging: console.log,
};

const sequelize = new Sequelize(
  "codeworks-db",
  "postgres",
  "postgress",
  config
);

module.exports = sequelize;
