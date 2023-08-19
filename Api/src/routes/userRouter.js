const { Router } = require("express");
const {
  getUsers,
  getUser,
  postUser,
  deleteUser,
  updateUser,
} = require("../handlers/userHandlers");

const userRoute = Router();

userRoute.get("/", getUsers);
userRoute.get("/:id", getUser);
userRoute.post("/register", postUser);
userRoute.delete("/:id", deleteUser);
userRoute.put("/:id", updateUser);

module.exports = userRoute;
