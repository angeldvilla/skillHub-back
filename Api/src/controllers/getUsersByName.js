const User = require("../models/User");

const getUsersByName = async (name) => {
  try {
    const users = await User.find({
      firstName: { $regex: name, $options: "i" },
    });

    if (users.length) {
      return users;
    }

    throw new Error("No se encontraron usuarios con ese nombre");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getUsersByName };
