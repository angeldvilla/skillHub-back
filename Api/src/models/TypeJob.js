const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const TJob = new Schema({
    
    title: {
        type: String,
        required: true
    },
   
})

const TypeJob = mongoose.model("TypeJob", TJob);
module.exports = TypeJob;