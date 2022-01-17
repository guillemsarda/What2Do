const EventsData = require("../models/eventsData");

const eventsController = {};

eventsController.postEvent = async (req, res) => {
  try {
    console.log(req.body);
    const event = await EventsData.create({
      owner: req.body.owner,
      type: req.body.type,
      eventName: req.body.eventName,
      location: req.body.location,
      date: req.body.date,
      ticketLink: req.body.ticketLink,
      numPeople: req.body.numPeople,
      eventDescription: req.body.eventDescription,
      imageLink: req.body.imageLink,
    });
    res.status(201);
    res.send(event);
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
};

module.exports = eventsController;
