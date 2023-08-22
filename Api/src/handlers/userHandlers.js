const { getUsersData } = require("../controllers/getUsers");
const { getUsersByName } = require("../controllers/getUsersByName");
const { getUserById } = require("../controllers/getUser");
const { postUserData } = require("../controllers/postUser");
const { deleteUserById } = require("../controllers/deleteUser");
const putUser = require("../controllers/putUser");

const getUsers = async (req, res) => {
  const { name } = req.query;
  try {
    name
      ? res.status(200).json(await getUsersByName(name))
      : res.status(200).json(await getUsersData());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error);
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

const updateUser= async(req,res)=>{
  const {firstName,lastName,email,phoneNumber,habilitar,image,pay, cantidadPost} = req.body;
  const { id } = req.params;
  try {
    const result = await putUser(id,{firstName,lastName,email,phoneNumber,habilitar,image,pay, cantidadPost});
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
}

module.exports = {
  getUsers,
  getUser,
  postUser,
  deleteUser,
  updateUser
};
