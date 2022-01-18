const EventsData = require("../models/eventsData");

const eventsController = {};

eventsController.postEvent = async (req, res) => {
  try {
    const event = await EventsData.create(req.body);
    res.status(201);
    res.send(event);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
};

eventsController.getEvents = async (req, res) => {
  try {
    const ev = await EventsData.findAll({
      where: {
        type: req.params.type,
      },
    });
    res.status(200);
    res.send(ev);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
};

module.exports = eventsController;
