const mongoose = require("mongoose");
const User = require("../models/User");

const getUserById = async (id) => {
  try {
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

    let user;
    if (isValidObjectId) {
      user = await User.findById(id);
    } else {
      user = await User.findOne({ uid: id });
    }
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = {
  getUserById,
};
