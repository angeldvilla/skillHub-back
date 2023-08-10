const { getPaymentData } = require('../controllers/getPayment');
const postMercadoPago = require('../controllers/postPayment');

const getHandlerPayment = async (req, res) => {
  try {
    res.status(200).json(await getPaymentData());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postHandlerPayment = async (req, res) => {
  const {plan, date, price} = req.body;
  const {id} = req.params;
  try {
    const response = await postMercadoPago(plan, date, price, id);
    res.status(200).json({
      message: 'Pago creado exitosamente',
    response
    });
  } catch (error) {
    res.status(400).json({
      message: 'No se pudo crear el pago',
      error: error.message,
    });
  }
};


module.exports = {
  getHandlerPayment,
  postHandlerPayment
};