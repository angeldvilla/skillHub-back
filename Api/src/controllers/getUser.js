const User = require("../models/User");

const getUserById = async (id) => {
  try {
    const user = await User.findOne({ uid: id });
    return user;
  } catch (error) {
    throw new Error("User not found");
  }
};

module.exports = {
  getUserById,
};
