const express = require("express");
const { encryptController, decryptController } = require("../controllers");

module.exports = (app) => {
  const router = express.Router();

  router.get("/encrypt", (req, res) => {
    res.render("encrypt");
  });

  router.get("/decrypt", (req, res) => {
    res.render("decrypt");
  });

  router.post("/encrypt", encryptController);
  router.post("/decrypt", decryptController);

  app.use(router);
};
