const mongoose = require('mongoose');
const Payment = require('../models/Payment');

const deletePaymentById = async (id) => {
  try {
    const pay = await Payment.findByIdAndDelete(id);
    return {pay, estado: "eliminado"};
  } catch (error) {
    throw new Error('Database error');
  }
};
module.exports = deletePaymentById;
