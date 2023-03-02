const { Model, DataTypes } = require("sequelize");
const sequelize = require("./model");

class EventsData extends Model {}

EventsData.init(
  {
    type: DataTypes.STRING,
    event_name: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.STRING,
    ticket_link: DataTypes.STRING,
    num_people: DataTypes.INTEGER,
    event_description: DataTypes.STRING,
    image_link: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "events_data",
  }
);

module.exports = EventsData;
