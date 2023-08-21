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
        success: `skillhub-back-production.up.railway.app/payment/success/${userId}`,
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
    
    return {
      id_venta: preferenceResponse.body.id,
      id_cliente:preferenceResponse.body.client_id,
      preferenceUrl: preferenceResponse.body.init_point,
    };
  } catch (error) {
    throw new Error("No se pudo crear el pago");
  }
};


module.exports = {
  postMercadoPago,
};