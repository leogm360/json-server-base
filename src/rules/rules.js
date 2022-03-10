const auth = require("json-server-auth");

const rules = auth.rewriter({
  users: 600,
  todos: 660,
});

module.exports = rules;
