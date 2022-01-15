const { Router } = require("express");
const userController = require("./controllers/controller");
const router = new Router();

router.post("/users", userController.signUp);
router.post("/user-login", userController.signIn);

module.exports = router;
