const mongoose = require('mongoose');
const Administrador = require('../models/Administrador');


const putAdministrador = async (uid, name, surname, email, phone, admin, id) => {
    try {
        const administrador = await Administrador.findOneAndUpdate( { _id: id },
            { uid, name, surname, email, phone, admin },
            { new: true });
       
        await administrador.save();
    
        return administrador;
      } catch (error) {
        throw new Error('Could not update administrador: ' + error.message);
      }
};

module.exports = putAdministrador;