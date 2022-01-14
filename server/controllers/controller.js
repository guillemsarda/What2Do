const UserData = require("../models/userData");

const userController = {};

userController.signUp = async (req, res) => {
  try {
    const data = await UserData.create(req.body);
    res.status(201);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

module.exports = userController;
