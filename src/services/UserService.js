const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

class UserService {
  async create(name, email, password) {
    if (!name || !email || !password) {
      return new Error("Missing required fields");
    }

    if (await User.findOne({ where: { email } })) {
      return new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (hashedPassword instanceof Error) {
      return new Error("Error hashing password");
    }

    const user = await User.create({ name, email, password: hashedPassword });

    return user;
  }

  async login(email, password) {
    if (!email || !password) {
      return new Error("Missing required fields");
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return new Error("User not found");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return new Error("Invalid password");
    }

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
    });

    return {user, token};
  }
}

module.exports = new UserService();
