const getJobSearch = require("../controllers/getJobSearch");
const getAllJobs = require("../controllers/getServices");

const searchJobHandller = async (req, res) => {
  const { title } = req.query;

  try {
    let response = await getJobSearch(title);
    


    if (!response.length) {
      response = await getAllJobs();

      res.status(400).json(response);
    } else {
      res.status(201).json(response);
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
module.exports = { searchJobHandller };
