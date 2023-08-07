const { Error } = require("mongoose");
const TypeJob = require("../models/TypeJob");

const createTypeJob = async (category, jobId) => {

      try {
        const job = new TypeJob({category, job: [jobId]});

        await job.save();

        return job;

      } catch (error) {

        throw new Error("Error while saving the user: " + error.message);
      }
     
   
};


module.exports =  {createTypeJob} ;
