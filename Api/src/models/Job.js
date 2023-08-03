const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const jobSchema = new Schema({
    name: {
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
        type: Text,
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
