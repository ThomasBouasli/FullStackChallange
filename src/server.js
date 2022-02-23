require('./database');
const path = require('path');
const Express = require("express");
const routes = require("./routes");

const app = Express();

app.use(Express.json());
app.use("/api", routes);
app.use(Express.static(path.resolve(__dirname, "view", "build")));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
