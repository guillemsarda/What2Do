const Express = require("express");
const router = require("./router");

const app = new Express();

app.use(router);
app.listen(3000, () => console.log("Listening to http://localhost:3000"));
