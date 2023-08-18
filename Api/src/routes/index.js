const { Router } = require("express");
const router = Router();

const jobRoute = require ('../routes/empleadoresRouter');
const userRoute = require("./userRouter");
const paymentRouter = require("../routes/paymentRouter")
const reviewsRouter = require("./reviewsRouter")
const adminRouter = require("../routes/administradoresRouter")
const mongoose = require("mongoose");
const User = require("../models/User");
const Payment =require("../models/Payment")
const verifyPhone = require("../handlers/verifyPhoneHandler")

const {  TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID } = process.env

const twilio = require("twilio")


const TWILIO_SERVICE_SID = "VA6878391225541c5a5b8c631718ab519c";

const twilioClient = require("twilio")(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN)


router.use("/empleador", jobRoute);
router.use("/user", userRoute);
router.use("/payment", paymentRouter)
router.use("/reviews", reviewsRouter)
router.use("/administrador", adminRouter)
router.post("/twilio/:number", (req, res) => {
  const { number } = req.params
  
  try {
    
    const client = require("twilio")(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN)
    client.messages.create({
      from: 'whatsapp:+14155238886',
      body: 'Bienvenido a SkillHud',
      to: `whatsapp:${number}`
    })
    

    console.log(number)
       res.status(201).send("mensaje enviado")
  } catch (error){   



       res.status(404).json({error: error.message})
}       

})  










// router.use("/users",  ( async  (req, res ) => {
//   const user = await User.aggregate([
//     {
//       $lookup: {
//         from: 'Payment',
//         localField: '_id',
//         foreignField: 'userId',
//         as: 'payments'
//       }
//     }
//   ]);
//     console.log(user)
//     res.status(202).json("hola")
// }))








module.exports = router;
