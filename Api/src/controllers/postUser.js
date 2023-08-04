const { Error } = require("mongoose");
const User = require ("../models/User")

const registerUser = async (fullName, email, password) => {
if(fullName && email && password) {

  const emailUser = await User.find({ email })
  if(emailUser.length === 0){
    const user = new User({fullName, email, password})
    user.save();
    return user;
  }
  else{
    throw new Error("Este Usuario ya fue creado!")
  }
}}





module.exports = { registerUser };


