const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const employeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    description: {
        type: Text,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
})
// Definir el modelo de empleados
const Employe = mongoose.model("Employe", employeSchema);
module.exports = Employe;