
const { getPaymentData } = require('../controllers/getPayment');
const deletePaymentById = require("../controllers/deletePayment");
const {postMercadoPago} = require('../controllers/postPayment');
const { error } = require('console');
const confirmPay = require('../controllers/postConfirmPay');
const putPayment = require('../controllers/putPayment');
const { getAllPaymentUserId } = require('../controllers/getAllPaymentUserId');


const getHandlerPayment = async (req, res) => {
  try {
    res.status(200).json(await getPaymentData());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const getPaymentUserId = async (req, res) => {
  const {id}= req.params
  try {
    res.status(200).json(await getAllPaymentUserId(id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const postHandlerPayment = async (req, res) => {
  const { plan, price} = req.body;
  const { id } = req.params;
  try {
    const response = await postMercadoPago(id, plan, price);
    res.status(200).json({
      message: 'Pago creado exitosamente',
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
  const { id } = req.params;
  try {
  const info = req.query.payment_id;
      console.log(req.query)
      const infoJson = JSON.stringify(info);
      if(!info){
        throw new Error({error: error.message});
      }
  
      res.status(200).redirect(`http://localhost:5173/user-panel/${id}/next/${info}`);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
    }

    const confirmPayHandler = async (req, res) => {
      const {plan, price, user, state, compra_Id} = req.body;
      try {
const response = await confirmPay(plan, price, user, state, compra_Id)
res.status(200).json(response);
      } catch (error) {
res.status(400).json({error: error.message})
      }
    }
    const putPaymentHandler = async (req, res) => {
      const {subscription } = req.body;
      const {id} = req.params;
      try {
          res.status(200).json(await putPayment(subscription, id))
      } catch (error) {
   res.status(400).json({error: error.message})       
          
      }
  }
    

module.exports = {
  getHandlerPayment,
  postHandlerPayment,
  deletePayment,
  success,
  confirmPayHandler,
  putPaymentHandler,
  getPaymentUserId
};