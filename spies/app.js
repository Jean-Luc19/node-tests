let db = require("./db");
module.exports.handleSignup = (email, password) => {
  //check unique email, save user to db, send welcome email
  db.saveUser({ email, password });
};
