const UserService = require("../services/UserService");

class UserController {
  async create(req, res) {
    const { name, email, password } = req.body;

    const {user, token} = await UserService.create(name, email, password);

    if (user instanceof Error) {
      return res.status(400).json(user.message);
    }

    return res.json({user, token});
  }

  async login(req, res) {
    const { email, password } = req.body;

    const {user, token} = await UserService.login(email, password);

    if (user instanceof Error) {
      return res.status(400).json(user.message);
    }

    return res.json({user, token});
  }
}

module.exports = new UserController();
