const mongoose = require ('mongoose');
const Job = require ('../models/Job');

const getAllJobs = async () => {
    try {
        const jobs = await Job.find()
        return jobs;
    } catch (error) {
        throw new Error('DataBase not found')
    }
}

module.exports = getAllJobs;

