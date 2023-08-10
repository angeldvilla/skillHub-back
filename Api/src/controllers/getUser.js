const User = require("../models/User");

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getUserById,
};
