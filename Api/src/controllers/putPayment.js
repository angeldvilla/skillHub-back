const mongoose = require('mongoose');
const Payment = require('../models/Payment');


const putPayment = async (subscription, id) => {
    try {
        const pay = await Payment.findOneAndUpdate( { _id: id },
            { subscription },
            { new: true });
       
        await pay.save();
    
        return pay;
      } catch (error) {
        throw new Error('Could not update subscription: ' + error.message);
      }
};

module.exports = putPayment;