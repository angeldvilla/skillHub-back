const mongoose = require('mongoose');
const Administrador = require('../models/Administrador');


const postAdministrador = async (uid, name, surname, email, phone, admin) => {
  try {

    const administrador = new Administrador({
        uid, name, surname, email, phone, admin
    });

    await administrador.save();
    return administrador;
  } catch (error) {
    throw new Error('Could not create administrador: ' + error.message);
  }
};

module.exports = postAdministrador;