const mongoose = require ('mongoose');
const Job = require ('../models/Job');

const getAllJobs = async (_id, title) => {
    let jobs;
    try {
        if(_id) {
             jobs = await Job.find({_id})
        } else if (title) {
            jobs = await Job.find({title})

        } else {
            jobs = await Job.find()
        }
        return jobs;
    } catch (error) {
        throw new Error('DataBase not found')
    }
}

module.exports = getAllJobs;

