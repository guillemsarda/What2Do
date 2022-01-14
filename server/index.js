const Express = require("express");
const sequelize = require("./models/model");
const router = require("./router");

const app = new Express();

app.use(Express.json());
app.use(router);

(async function bootstrap() {
  try {
    await sequelize.sync();
    app.listen(3000, () => console.log("Listening to http://localhost:3000"));
  } catch (error) {
    console.log(error);
  }
})();
