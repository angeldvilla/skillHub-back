const { Router } = require ('express');
const {userHandler,allUser, deleteUser} = require('../handlers/userHandlers');



const userRoute = Router();

userRoute.post("/register", userHandler )
userRoute.delete("/:id", deleteUser)
userRoute.get("/", allUser)



module.exports = userRoute;