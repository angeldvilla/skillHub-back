const { getPaymentData } = require('../controllers/getPayment');
const deletePaymentById = require("../controllers/deletePayment");
const {postMercadoPago} = require('../controllers/postPayment');
const getHandlerPayment = async (req, res) => {
  try {
    res.status(200).json(await getPaymentData());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const postHandlerPayment = async (req, res) => {
  const { plan, price, message} = req.body;
  const { id } = req.params;

  try {
    const response = await postMercadoPago(id, plan, price, message);
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
}
module.exports = {
  getHandlerPayment,
  postHandlerPayment,
  deletePayment
};