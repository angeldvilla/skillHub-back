const { registerUser } = require("../controllers/postUser")
const {getAllUser} = require ("../controllers/getUsers")

const userHandler = async (req, res) => {
    const {firstName,lastName,phoneNumber, email, password} = req.body;
    try {
      const result = await registerUser(firstName, lastName,phoneNumber,email, password)
      res.status(201).json(result);
    } catch(error) {
      res.status(409).json({error: error.message})
    }
}
const allUser = async (req, res) => {
  try {
    const allUser = await getAllUser();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports ={ userHandler, 
  allUser};