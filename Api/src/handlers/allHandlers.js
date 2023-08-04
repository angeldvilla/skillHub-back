const getAllJobs = require("../controllers/getServices");
const deleteJobById = require ("../controllers/deleteServices");

const allJobsHandler = async (req, res) => {
  try {
    const all = await getAllJobs();
    res.status(200).json(all);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteJob = async (req, res) => {
    const {id} = req.params
    try {
const job = await deleteJobById(id);
job ? res.status(200).json(job) : res.status(400).json({error: 'Job not found'})
    } catch (error) {
res.status(400).json({error: error.message})
    }
 }

module.exports = {
  allJobsHandler,
  deleteJob,
};
