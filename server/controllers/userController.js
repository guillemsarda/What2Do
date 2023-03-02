const EventsData = require("../models/events-data");
const UsersData = require("../models/user-data");

const userController = {};

userController.signUp = async (req, res) => {
  try {
    const exist = await UsersData.findAll({
      where: {
        email: req.body.email,
      },
    });
    if (exist.length) {
      res.status(401);
      res.send(null);
    } else {
      const data = await UsersData.create(req.body);
      res.status(201);
      res.send(data);
    }
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
};

userController.signIn = async (req, res) => {
  try {
    const found = await UsersData.findAll({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (found.length) {
      res.status(200);
      res.send(found);
    } else {
      res.status(401);
      res.send(null);
    }
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
};

userController.getUser = async (req, res) => {
  try {
    const user = await UsersData.findAll({ include: ["events"] });
    const event = await EventsData.findByPk(1, {
      include: ["owner"],
    });
    console.log(event?.dataValues);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};
module.exports = userController;
