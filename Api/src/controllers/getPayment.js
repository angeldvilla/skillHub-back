const mongoose = require("mongoose");
const Payment = require("../models/Payment");

const getPaymentData = async () => {
  try {
    const pagos = await Payment.find();
    return pagos;
  } catch (error) {
    throw new Error("DataBase not found");
  }
};

module.exports = { getPaymentData };