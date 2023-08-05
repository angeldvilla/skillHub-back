const { Router } = require ('express');
const {userHandler,allUser} = require('../handlers/userHandlers');



const userRoute = Router();

userRoute.post("/register", userHandler )

userRoute.get("/", allUser)



module.exports = userRoute;