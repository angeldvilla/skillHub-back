const mongoose = require('mongoose');
const Job = require('../models/Job');

const createPost = async ( title, users, image,phone, ability, description, address ) => {
  try {
    const job = new Job({  title, users, image,phone, ability, description, address  });
     job.save();
    return job;
  } catch (error) {
    throw new Error('Could not create service');
  }
};
module.exports = createPost;

