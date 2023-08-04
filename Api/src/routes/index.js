const { Router } = require("express");
const router = Router();

const jobRoute = require ('../routes/empleadoresRouter')


router.use("/empleador", jobRoute);

module.exports = router;
