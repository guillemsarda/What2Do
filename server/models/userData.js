const { Model, DataTypes } = require("sequelize");
const sequelize = require("./model");

class UserData extends Model {}

UserData.init(
  {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "userdata",
  }
);

module.exports = UserData;
