const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  console.log(token);

  if (!token) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const parts = token.split(" ");

  if (!/^Bearer$/i.test(parts[0]) || parts.length !== 2) {
    return res.status(401).json({ error: "Token malformatted" });
  }

  jwt.verify(parts[1], authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token invalid" });

    req.userId = decoded.id;

    return next();
  });
};
