const tailwindProcess = require("./config/tailwindCompile");
const express = require("express");
const routes = require("./routes");
const hbsConfig = require("./config/viewEngine");
const middlewares = require("./middlewares");

tailwindProcess();

const app = express();

middlewares(app);
hbsConfig(app);
routes(app);

app.listen(3000, () => {
  console.log("🚀 RUNNING ON http://localhost:3000");
});
