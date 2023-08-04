const getAllJobs = require("../controllers/getServices");

const allJobsHandler = async (req, res) => {
  try {
    const all = await getAllJobs();
    res.status(200).json(all);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  allJobsHandler,
};
