const { Error } = require("mongoose");
const User = require ("../models/User")

const registerUser = async (firstName, lastName,email, password,phoneNumber) => {
if(firstName && email && password && lastName &&phoneNumber) {

  const emailUser = await User.find({ email })
  if(emailUser.length === 0){
    const user = new User({firstName,lastName, email, password,phoneNumber})
    user.save();
    return user;
  }
  else{
    throw new Error("Este Usuario ya fue creado!")
  }
}}





module.exports = { registerUser };


