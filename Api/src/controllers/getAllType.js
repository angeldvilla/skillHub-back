
const mongoose = require ('mongoose');

const TypeJob = require("../models/TypeJob");

const getAllType = async () => {
   
    try{
        const typesJob = await TypeJob.find()
            return typesJob;
    } catch (error) {
        throw new Error('DataBase not found')
    }
}

module.exports = getAllType