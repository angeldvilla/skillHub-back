const Payment = require("../models/Payment");
const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const postMercadoPago = async (userId, plan, price, message) => {
  try {
if(!message){
    let preference = {

      items: [
        {
          title: `Plan ${plan}`,
          currency_id: "ARS",
          picture_url: "URL de la imagen",
          description: `Acceso al plan ${plan} de servicios`,
          quantity: 1,
          unit_price: price,
        },
      ],
      back_urls: {
        success: "http://localhost:5173/mensage_Pago",
        failure: "",
        pending: "",
      },
      auto_return: "approved",
      binary_mode: true,
      payment_methods: {
        excluded_payment_types: [{ id: "ticket" }],
      },
      recurring_payment: true,
      frequency: 1,
      frequency_type: "months",
    

    }
    const preferenceResponse = await mercadopago.preferences.create(preference);
    return {
      //paymentId: payment._id,
      preferenceUrl: preferenceResponse.body.init_point,
    };
   } else {

    const payment = new Payment({
      plan,
      price,
      user: userId,
    });
  
    await payment.save()
    return payment;
  }
  } catch (error) {
    throw new Error("No se pudo crear el pago");
  }
};



module.exports = {
  postMercadoPago,

};