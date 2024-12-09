const availableRoutes = ["/encrypt", "/decrypt"];
const defaultRoute = "/encrypt";

module.exports = (req, res, next) => {
  const requestedRoute = req.path;
  if (!availableRoutes.includes(requestedRoute)) {
    return res.redirect(defaultRoute);
  }
  next();
};
