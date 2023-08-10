const Payment = require("../models/Payment");
const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY });

const postMercadoPago = async (plan, date, price, userId) => {
  // Crear y guardar un nuevo pago en la base de datos
  const payment = new Payment({
    plan,
    date,
    price,
    user: userId,
  });
  await payment.save();

  let preference = {
    items: [
      {
        title: "Título del servicio",
        currency_id: "ARS",
        picture_url: "URL de la imagen",
        description: "Descripción del servicio",
        category_id: "art",
        quantity: 1,
        unit_price: price, 
      },
    ],
    back_urls: {
      success: "http://localhost:3002/empleador",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
    binary_mode: true,
  };

  const preferenceResponse = await mercadopago.preferences.create(preference);
console.log(preferenceResponse)
  return {
    payment,
    preferenceResponse,
  };
};

module.exports = postMercadoPago;