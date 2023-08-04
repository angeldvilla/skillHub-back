const { Router } = require ('express');
const userHandler = require('../handlers/userHandlers');


const userRoute = Router();

userRoute.post("/register", userHandler )



module.exports = userRoute;