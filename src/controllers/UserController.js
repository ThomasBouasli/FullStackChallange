const UserService = require("../services/UserService");

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const result = await UserService.create(name, email, password);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }

  async login(req, res) {
    const { email, password } = req.body;

    const result = await UserService.login(email, password);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}

module.exports = new UserController();
