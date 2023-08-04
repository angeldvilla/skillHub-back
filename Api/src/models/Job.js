const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    address: {
       type: String,
       required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    ability: {
        type: [String],
        required: true,
    },
    phone: {
        type: Number,
    },
    image: {
        type: String,
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;