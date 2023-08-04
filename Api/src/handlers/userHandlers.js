const { registerUser } = require("../controllers/postUser")

const userHandler = async (req, res) => {
    const {fullname, email, password} = req.body;
    try {
      const result = await registerUser(fullname, email, password)
      res.status(201).json(result);
    } catch(error) {
      res.status(409).json({error: error.message})
    }
}

module.exports = userHandler;