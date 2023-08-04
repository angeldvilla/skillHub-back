const mongoose = require('mongoose');
const Job = require('../models/Job');

const postJobs = async (name, address, description, ability, phone, image) => {
  try {
    const job = new Job({ name, address, description, ability, phone, image });
     job.save();
    return job;
  } catch (error) {
    throw new Error('Could not create service');
  }
};
module.exports = postJobs;

// router.post("/:userId/create-service", async (req, res) => {
//     const {name, address, description, ability, phone, image} = req.body;
//     try {
// const service = await postJobs(name, address, description, ability, phone, image);
// res.json({error: null, service})
//     } catch (error) {
// res.status(400).json({error: error.message})
//     }
// })