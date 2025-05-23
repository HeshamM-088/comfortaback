const express = require("express");
const user_routes = express.Router();
const { checkAuth } = require("../middleware/checkAuth");
const {
  getUsers,
  addUsers,
  deleteUsers,
  putUsers,
  getSingleUsers,
} = require("../controllers/users");
const { signup, login } = require("../controllers/auth");

user_routes.route("/").get(getUsers);
user_routes.route("/Signup").post(signup);
user_routes.route("/login").get(login);

user_routes
  .route("/:userId")
  .get(getSingleUsers)
  .post(addUsers)
  .put(putUsers)
  .delete(deleteUsers);

module.exports = { user_routes };
