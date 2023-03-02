const { Model, DataTypes } = require("sequelize");
const EventsData = require("./events-data");
const sequelize = require("./model");

class UsersData extends Model {}

UsersData.init(
  {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "users_data",
  }
);
UsersData.hasMany(EventsData, {
  foreignKey: "user_id",
  as: "events",
});
EventsData.belongsTo(UsersData, {
  foreignKey: "user_id",
  as: "owner",
});

module.exports = UsersData;
