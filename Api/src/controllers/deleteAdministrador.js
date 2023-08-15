const mongoose = require("mongoose")
const Administrador = require("../models/Administrador");

const deleteAdministrador = async (id) => {
    try{
        const admin = await Administrador.findByIdAndDelete(id)
            return {admin, estado: 'eliminado'};
    } catch (error) {
        throw new Error('DataBase not found')
    }
}

module.exports = deleteAdministrador

