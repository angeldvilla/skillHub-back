const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const employeSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
       },
    date: {
        type: Date,
        required: true
    },
    hour: {
        type: Date,
        required: true,
    },
    price: {
       type: Number,
       required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})
const Employe = mongoose.model("Employe", employeSchema);
module.exports = Employe;