const registrerUser = require("../controllers/postUser")

const userHandler = async (req, res) => {
    const {fullName, email, password} = req.body;
    try {
      const result = await registrerUser(fullName, email, password)
      res.status(201).json(result);
    } catch(error) {
      res.status(400).json({error: error.message})
    }
}

module.exports = userHandler;