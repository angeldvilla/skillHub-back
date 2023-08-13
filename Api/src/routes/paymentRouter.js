const {Router} = require ('express');
const { getHandlerPayment, postHandlerPayment, deletePayment, success, confirmPayHandler} = require('../handlers/paymentHandler');

const paymentRouter = Router();

paymentRouter.get("/", getHandlerPayment)
paymentRouter.get("/success", success)
paymentRouter.post("/save", confirmPayHandler)
paymentRouter.post("/:id", postHandlerPayment)
paymentRouter.delete("/:id", deletePayment)


module.exports = paymentRouter;