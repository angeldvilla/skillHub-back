const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const paymentSchema = new Schema({
    plan: {
        type: String,
        required: true
    },
    price: {
       type: Number,
       required: true,
    },
    user: {
        type: String,
        ref: 'User',
        required: true,
    },
    state: {
        type: String,
        required: true,  
    },
    compra_Id: {
        type: String,
        required: true,
    },
    subscription: {
        type: Boolean,
        default: true,
      }
    },
    {
        timestamps: true
    })
const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;