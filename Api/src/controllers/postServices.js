const mongoose = require('mongoose');
const Job = require('../models/Job');
const User = require('../models/User');

const createPost = async (title, users, image, phone, ability, description, address) => {

  const validate = User.find({ id: users })
  if (validate.length > 0) {
    const job = new Job({ title, users, image, phone, ability, description, address });
    job.save();
    return job;
  }
  else {
    throw new Error('Could not create service');
  }

}
module.exports = createPost;

