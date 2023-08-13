const {Router} = require ('express');
const { getHandlerPayment, postHandlerPayment, deletePayment, success} = require('../handlers/paymentHandler');

const paymentRouter = Router();

paymentRouter.get("/", getHandlerPayment)
paymentRouter.get("/success", success)

//paymentRouter.get("/confirm", getPay)
 paymentRouter.post("/:id", postHandlerPayment)
paymentRouter.delete("/:id", deletePayment)


module.exports = paymentRouter;