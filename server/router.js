const { Router } = require("express");
const router = new Router();

const eventsController = require("./controllers/eventsController");
const userController = require("./controllers/userController");

router.post("/users", userController.signUp);
router.post("/user-login", userController.signIn);

router.post("/events", eventsController.postEvent);
router.get("/events/:type", eventsController.getEvents);

module.exports = router;
