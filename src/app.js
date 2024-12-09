const tailwindProcess = require("./config/tailwindCompile");
const express = require("express");
const routes = require("./routes");
const hbsConfig = require("./config/viewEngine");
const middlewares = require("./middlewares");
const ENV = require("./config/env");

tailwindProcess();

const app = express();

middlewares(app);
hbsConfig(app);
routes(app);

app.listen(ENV.PORT, () => {
  console.log(`🚀 RUNNING ON http://localhost:${ENV.PORT}`);
});
