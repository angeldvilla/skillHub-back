const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const jobSchema = new Schema({
    name: {
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
    employe: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employe',
        required: true,
    }
})
// Definir el modelo de empleados
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;