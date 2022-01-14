"use strict";

const { Router } = require("express");
const userController = require("./controllers/controller");
const router = new Router();

router.post("/users", userController.signUp);

module.exports = router;
