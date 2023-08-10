const mongoose = require('mongoose');
const TJob = require('../models/TypeJob');

const deleteTypeById = async (id) => {
  try {
    const type = await TJob.findByIdAndDelete(id);
    return {type, estado: "eliminado"};
  } catch (error) {
    throw new Error('Database error');
  }
};

module.exports = deleteTypeById;