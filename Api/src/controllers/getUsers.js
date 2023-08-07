const mongoose = require("mongoose");
const User = require("../models/User");

const getUsersData = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (error) {
    throw new Error("DataBase not found");
  }
};

module.exports = { getUsersData };
