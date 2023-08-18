const { Router } = require("express");
const statusRouter = Router();
const { statusHandler } = require("../handlers/statusHandler");

statusRouter.put("/", statusHandler)



module.exports = statusRouter