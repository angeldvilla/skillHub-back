const { Error } = require("mongoose");
const TypeJob = require("../models/TypeJob");

const createTypeJob = async (title) => {

      try {
        const job = await new TypeJob({title});

        await job.save();

        return job;

      } catch (error) {

        throw new Error("Error while saving the user: " + error.message);
      }
     
   
};


module.exports =  createTypeJob ;
