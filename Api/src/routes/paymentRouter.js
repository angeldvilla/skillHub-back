const {Router} = require ('express');
const {getHandlerPayment, postHandlerPayment, deletePayment} = require('../handlers/paymentHandler');

const paymentRouter = Router();

paymentRouter.get("/", getHandlerPayment)
paymentRouter.post("/:id", postHandlerPayment)
paymentRouter.delete("/:id", deletePayment)


module.exports = paymentRouter;