const mongoose = require('mongoose');
const Job = require('../models/Job');

const deleteJobById = async (id) => {
  try {
    const job = await Job.findByIdAndDelete(id);
    return job;
  } catch (error) {
    throw new Error('Database error');
  }
};

module.exports = deleteJobById;

//HANDLER
//  router.delete("/:userId/empleadores/", async (req, res) => {
//     const {id} = req.params
//     try {
// const job = await deleteJobById(id);
// job ? res.status(200).json(job) : res.status(400).json({error: 'Job not found'})
//     } catch (error) {
// res.status(404).json({error: error.message})
//     }
//  })