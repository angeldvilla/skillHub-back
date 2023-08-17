const User = require("../models/User");

const getUsersByName = async (name) => {
  try {
    const users = await User.find({
      firstName: { $regex: name, $options: "i" },
    });

    return users;
  } catch (error) {
    throw new Error("No se encontraron usuarios con ese nombre");
  }
};

module.exports = { getUsersByName };
