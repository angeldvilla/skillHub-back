const Payment = require("../models/Payment");
const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const postMercadoPago = async (userId, plan, price) => {
  try {
    let preference = {
      metadata:{user_id:userId},

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
        success: "http://localhost:3001/payment/success",
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
    };

    const preferenceResponse = await mercadopago.preferences.create(preference);
    console.log(preferenceResponse);
    
    const payment = new Payment({
      plan,
      price,
      user: userId,

    });
    await payment.save();
    return {
      payment: payment,
      
      id_venta: preferenceResponse.body.id,
      id_cliente:preferenceResponse.body.client_id,
      preferenceUrl: preferenceResponse.body.init_point,
    };
  } catch (error) {
    throw new Error("No se pudo crear el pago");
  }
};

// const confirmPay = async (collection_id, collection_status, payment_id, status, external_reference, payment_type, merchant_order_id, preference_id,
//   site_id, processing_mode, merchant_account_id) => {
//     let url = 'http://localhost:5174/next';
// try {
//   if (url && status === 'approved') {
//     const paymentData = {
//       collection_id,
//       collection_status,
//       payment_id,
//       status,
//       external_reference,
//       payment_type,
//       merchant_order_id,
//       preference_id,
//       site_id,
//       processing_mode,
//       merchant_account_id
//     };
//     console.log(paymentData)
//     return paymentData;
//   }
// } catch (error) {
// throw new Error({error: error.message})
// }

//}
module.exports = {
  postMercadoPago,
  //confirmPay
};