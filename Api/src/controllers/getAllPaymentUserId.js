
const mongoose = require("mongoose");
const Payment = require("../models/Payment");

const getAllPaymentUserId = async (id) => {
  try {
    const result = await Payment.find({ user: id });
    return result;
  } catch (error) {
    throw new Error("DataBase not found");
  }
};

module.exports = { getAllPaymentUserId };