const mongoose = require('mongoose');
const Job = require('../models/Job');
const User = require('../models/User');

const createPost = async (title, userId, image, price, ability, description, address) => {
  try {

    const job = new Job({
      title,
      users: [userId], 
      image,
      price,
      ability,
      description,
      address,
    });

    await job.save();

    return job;
  } catch (error) {
   
    throw new Error('Could not create job: ' + error.message);
  }
};

module.exports = createPost;

