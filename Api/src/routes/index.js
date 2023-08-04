const { Router } = require("express");
const router = Router();

const jobRoute = require ('../routes/empleadoresRouter');
const userRoute = require("./userRouter");


router.use("/empleador", jobRoute);

router.use("/user", userRoute )

module.exports = router;
