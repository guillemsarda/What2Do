const { Model, DataTypes } = require("sequelize");
const sequelize = require("./model");

class EventsData extends Model {}

EventsData.init(
  {
    owner: DataTypes.INTEGER,
    type: DataTypes.STRING,
    eventName: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.STRING,
    ticketLink: DataTypes.STRING,
    numPeople: DataTypes.STRING,
    eventDescription: DataTypes.STRING,
    imageLink: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "eventsData",
  }
);

module.exports = EventsData;
