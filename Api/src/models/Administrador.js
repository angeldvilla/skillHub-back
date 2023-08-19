const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const administradorSchema = new Schema({
    uid: {
        type: String,
        required: true,
        index: true,
    },
    name: {
       type: String,
       required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,  
    },
    phone: {
        type: Number,
        required: true,
    },
    admin: {
        type: Boolean,
        required: true,
    }
    }
    )
const Administrador = mongoose.model("Administrador", administradorSchema);
module.exports = Administrador;