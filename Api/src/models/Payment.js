const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const paymentSchema = new Schema({

    plan: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
    },
    price: {
       type: Number,
       required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
      
})
const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;