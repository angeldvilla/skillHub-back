const {Router} = require ('express');
const { getHandlerPayment, postHandlerPayment, deletePayment, success, confirmPayHandler, putPaymentHandler} = require('../handlers/paymentHandler');

const paymentRouter = Router();

paymentRouter.get("/", getHandlerPayment)
paymentRouter.get("/success/:id", success)
paymentRouter.post("/save", confirmPayHandler)
paymentRouter.post("/:id", postHandlerPayment)
paymentRouter.delete("/:id", deletePayment)
paymentRouter.put('/:id', putPaymentHandler);



module.exports = paymentRouter;