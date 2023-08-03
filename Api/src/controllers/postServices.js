const mongoose = require('mongoose');
const Job = require('../models/Job');

const postJobs = async (name, address, description, ability, phone, image) => {
  try {
    const job = new Job({ name, address, description, ability, phone, image });
    const post = await job.save();
    return post;
  } catch (error) {
    throw new Error('Could not create service');
  }
};

module.exports = postJobs;