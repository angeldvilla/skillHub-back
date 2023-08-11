const { Router } = require("express");
const router = Router();

const jobRoute = require ('../routes/empleadoresRouter');
const userRoute = require("./userRouter");
const paymentRouter = require("../routes/paymentRouter")




router.use("/empleador", jobRoute);
router.use("/user", userRoute);
router.use("/payment", paymentRouter)









module.exports = router;
