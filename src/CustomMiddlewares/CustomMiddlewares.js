const errors = require("../errors/errors");

class CustomMiddlewares {
  static signup(req, res, next) {
    if ("name" in req.body && "birthDate" in req.body) {
      next();
    } else {
      res.status(400).jsonp(errors.signup);
    }
  }

  static todos(req, res, next) {
    if ("title" in req.body && "description" in req.body) {
      console.log("aqui");
      req.body.createdAt = new Date().toUTCString();

      req.body.completed = false;

      next();
    } else {
      res.status(400).jsonp(errors.todos);
    }
  }
}

module.exports = CustomMiddlewares;
