const { getUsersData } = require("../controllers/getUsers");
const { postUserData } = require("../controllers/postUser");
const { deleteUserById } = require("../controllers/deleteUser");
const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    res.status(200).json(await getUsersData());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await User.findById(id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postUser = async (req, res) => {
  const userData = req.body;
  try {
    res.status(231).json(await postUserData(userData));
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await deleteUserById(id);
    user
      ? res.status(200).json(user)
      : res.status(400).json({ error: error.message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  deleteUser,
};
