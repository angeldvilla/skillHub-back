const Payment = require("../models/Payment");
const mercadopago = require("mercadopago");

const confirmPay = async (plan, price, user, state, compra_Id) => {
    try {
const payment = new Payment ({
    plan,
    price,
    user,
    state,
    compra_Id
})
await payment.save()
return payment;

    } catch(error) {
throw new Error("No se pudo crear el pago")
    }
};

module.exports = confirmPay;