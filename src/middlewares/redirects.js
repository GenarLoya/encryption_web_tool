const defaultRoute = "/encrypt";

module.exports = (req, res, next) => {
  const requestedRoute = req.path;
  if (requestedRoute == "/") {
    return res.redirect(defaultRoute);
  }
  next();
};
