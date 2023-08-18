const mongoose = require('mongoose');
const Job = require('../models/Job');


const putJob = async (address, description, price, image, ability, id) => {
    try {
        const job = await Job.findOneAndUpdate( { _id: id },
            { address, description, price, image, ability },
            { new: true });
       
        await job.save();
    
        return job;
      } catch (error) {
        throw new Error('Could not update job: ' + error.message);
      }
};

module.exports = putJob;