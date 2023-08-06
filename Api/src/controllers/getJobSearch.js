const Job = require("../models/Job");
const mongoose = require("mongoose");
const getAllJobs = require("./getServices");

const getJobSearch = async (title) => {
  try {
    if (title) {
      const regex = new RegExp(title, "i");
      const jobDataBase = await Job.find({ title: regex });

      if (jobDataBase.length > 0) {
        return jobDataBase;
      } else {
      
        const firstLetter = title.charAt(0).toUpperCase();
        const jobsWithFirstLetter = await Job.find({ title: { $regex: `^${firstLetter}`, $options: "i" } });

        if (jobsWithFirstLetter.length > 0) {
          return jobsWithFirstLetter;
        } else {
          console.log("No se encontraron trabajos que coincidan con el título.");
          return [];
        }
      }
    }
  } catch (error) {
    throw new Error("DataBase not found");
  }
};

module.exports = getJobSearch;

