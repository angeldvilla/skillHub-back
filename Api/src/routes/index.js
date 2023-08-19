const { Router } = require("express");
const router = Router();

const jobRoute = require ('../routes/empleadoresRouter');
const userRoute = require("./userRouter");
const paymentRouter = require("../routes/paymentRouter")
const reviewsRouter = require("./reviewsRouter")
const adminRouter = require("../routes/administradoresRouter")
const statusRouter = require("./statusRouter")


router.use("/empleador", jobRoute);
router.use("/user", userRoute);
router.use("/payment", paymentRouter)
router.use("/reviews", reviewsRouter)
router.use("/administrador", adminRouter)
router.use("/users/status", statusRouter)









module.exports = router;
