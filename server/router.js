"use strict";

const { Router } = require("express");
const test = require("./controllers/controller");
const router = new Router();

router.get("/", test);

module.exports = router;
