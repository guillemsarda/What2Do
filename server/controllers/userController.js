const UserData = require("../models/userData");

const userController = {};

userController.signUp = async (req, res) => {
  try {
    const exist = await UserData.findAll({
      where: {
        email: req.body.email,
      },
    });
    if (exist.length) {
      res.status(401);
      res.send(null);
    } else {
      const data = await UserData.create(req.body);
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
    const found = await UserData.findAll({
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

module.exports = userController;
