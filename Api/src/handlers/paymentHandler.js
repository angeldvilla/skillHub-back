
const { getPaymentData } = require('../controllers/getPayment');
const deletePaymentById = require("../controllers/deletePayment");
const {postMercadoPago} = require('../controllers/postPayment');
const { error } = require('console');


const getHandlerPayment = async (req, res) => {
  try {
    res.status(200).json(await getPaymentData());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const postHandlerPayment = async (req, res) => {
  const { plan, price} = req.body;
  const { id } = req.params;
  try {
    const response = await postMercadoPago(id, plan, price);
    const paymentId = response.payment._id;
    res.status(200).json({
      message: 'Pago creado exitosamente',
      paymentId: paymentId,
      preferenceUrl: response.preferenceUrl,
    });
  } catch (error) {
    res.status(400).json({
      message: 'No se pudo crear el pago',
      error: error.message,
    });
  }
};


const deletePayment = async (req, res) => {
  const { id } = req.params
  try {
    const pay = await deletePaymentById(id);
    pay ? res.status(200).json(pay) : res.status(400).json({ error: 'Payment not found' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};
const success = (req, res) => {
  try {
  const info = req.query.payment_id;
      console.log(req.query)
      const infoJson = JSON.stringify(info);
      if(!info){
        throw new Error({error: error.message});
      }
  
      res.status(200).redirect(`http://localhost:5174/next/${info}`);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
    }
    //res.status(200).redirect(http://localhost:5173/mensaje/${encodeURIComponent(infoJson)});
   // res.status(200).json(info);


// const getPay = async (req, res) => {
//   const {collection_id,
//     collection_status,
//     payment_id,
//     status,
//     external_reference,
//     payment_type,
//     merchant_order_id,
//     preference_id,
//     site_id,
//     processing_mode,
//     merchant_account_id} = req.body
//   try {
//     res.status(200).json(await confirmPay(collection_id,
//       collection_status,
//       payment_id,
//       status,
//       external_reference,
//       payment_type,
//       merchant_order_id,
//       preference_id,
//       site_id,
//       processing_mode,
//       merchant_account_id));
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }

module.exports = {
  getHandlerPayment,
  postHandlerPayment,
  deletePayment,
  //getPay
  success
};