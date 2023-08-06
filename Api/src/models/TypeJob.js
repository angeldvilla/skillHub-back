const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const TJob = new Schema({
    
    title: {
        type: String,
        required: true
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job', 
    }
   
})

const TypeJob = mongoose.model("TypeJob", TJob);
module.exports = TypeJob;