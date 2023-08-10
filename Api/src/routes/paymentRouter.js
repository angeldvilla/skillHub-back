const {Router} = require ('express');
const {getHandlerPayment, postHandlerPayment} = require('../handlers/paymentHandler');

const paymentRouter = Router();

paymentRouter.get("/", getHandlerPayment)
paymentRouter.post("/:id", postHandlerPayment)

module.exports = paymentRouter;