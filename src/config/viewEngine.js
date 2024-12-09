const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const hbsHelpers = require("../utils/hbs");

module.exports = (app) => {
  const viewsPath = path.join(__dirname, "../views");
  app.set("views", viewsPath);

  app.engine(
    "hbs",
    exphbs.engine({
      extname: ".hbs",
      layoutsDir: path.join(viewsPath, "layouts"),
      defaultLayout: "main",
      partialsDir: path.join(viewsPath, "partials"),
      helpers: hbsHelpers,
    })
  );
  app.set("view engine", "hbs");
  app.use(function (req, res, next) {
    app.locals.context = {
      ...req.body,
      path: req.path,
      query: req.query,
      method: req.method,
    };
    next();
  });
};
