const mongoose = require("mongoose")
const Administrador = require("../models/Administrador");

const getAdministrador = async () => {
    try{
        const admin = await Administrador.find()
            return admin;
    } catch (error) {
        throw new Error('DataBase not found')
    }
}

module.exports = getAdministrador