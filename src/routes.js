const routes = require("express").Router();

const UserController = require("./controllers/UserController");

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.post("/users", UserController.create);
routes.post("/users/login", UserController.login);

module.exports = routes;
