const { Router } = require("express");
const router = Router();

const jobRoute = require ('../routes/empleadoresRouter');
const userRoute = require("./userRouter");
const paymentRouter = require("../routes/paymentRouter")
const reviewsRouter = require("./reviewsRouter")




router.use("/empleador", jobRoute);
router.use("/user", userRoute);
router.use("/payment", paymentRouter)
router.use("/reviews", reviewsRouter)








module.exports = router;
