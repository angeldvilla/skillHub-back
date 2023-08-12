const mongoose = require('mongoose');
const Job = require('../models/Job');

const getAllJobs = async (id, title) => {
  let jobs;
  try {
    if (mongoose.Types.ObjectId.isValid(id)) {
      jobs = await Job.find({ _id: id });
    } else {
      jobs = await Job.find({ uid: id });
    }
    if (jobs.length === 0 && title) {
      jobs = await Job.find({ title });
    }
    return jobs;
  } catch (error) {
    throw new Error('Database error');
  }
};

module.exports = getAllJobs;

