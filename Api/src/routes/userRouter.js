const { Router } = require("express");
const {
  getUsers,
  getUser,
  postUser,
  deleteUser,
} = require("../handlers/userHandlers");

const userRoute = Router();

userRoute.get("/", getUsers);
userRoute.get("/:id", getUser);
userRoute.post("/register", postUser);
userRoute.delete("/:id", deleteUser);

module.exports = userRoute;
