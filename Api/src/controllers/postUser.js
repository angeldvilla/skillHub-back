const User = require ("../models/User")

const registrerUser = (fullName, email, password) => {
if(fullName && email && password) {
    const user = new User({fullName, email, password})
  user.save();
  return user;
}}

module.exports = {registrerUser};


