const { registerUser } = require("../controllers/postUser")
const {getAllUser} = require ("../controllers/getUsers")

const userHandler = async (req, res) => {
    const {firstName,lastName,email, password, phoneNumber} = req.body;
    try {
      const result = await registerUser(firstName, lastName,email,password, phoneNumber)
      if(!result){return console.log('udefined')}
      res.status(231).json(result);
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