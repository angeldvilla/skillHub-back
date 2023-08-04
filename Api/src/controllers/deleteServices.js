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

