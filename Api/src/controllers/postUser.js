const { Error } = require("mongoose");
const User = require("../models/User");

const postUserData = async (userData) => {
  try {
    if (!userData) {
      throw new Error("Missing data.");
    }

    const user = new User(userData);
    await user.save();

    return user;
  } catch (error) {
    throw new Error("Error while saving the user: " + error.message);
  }
};

module.exports = { postUserData };
