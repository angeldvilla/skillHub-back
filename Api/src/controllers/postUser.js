const { Error } = require("mongoose");
const User = require("../models/User");

const registerUser = async (firstName, lastName, email, password, phoneNumber) => {
  if (firstName && lastName && email && password && phoneNumber) {
    const emailUser = await User.find({ email });

    if (emailUser.length === 0) {
      try {
        const user = new User({ firstName, lastName, email, password, phoneNumber });
        await user.save();
        return user;
      } catch (error) {
        throw new Error("Error while saving the user: " + error.message);
      }
    } else {
      throw new Error("Este Usuario ya fue creado!");
    }
  } else {
    throw new Error("Please provide all required user information.");
  }
};

module.exports = { registerUser };
