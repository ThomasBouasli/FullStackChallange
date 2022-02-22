const routes = require("express").Router();

const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserController");

const authMiddleware = require("./middleware/auth");

routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.post("/users", UserController.create);
routes.post("/users/login", UserController.login);


routes.use("/products",authMiddleware);

routes.post("/products", ProductController.create);
routes.get("/products", ProductController.getAll);

module.exports = routes;
