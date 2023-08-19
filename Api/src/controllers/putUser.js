const mongoose = require('mongoose');
const User = require('../models/User');


const putUser = async (id,{firstName,lastName,email,phoneNumber,habilitar,image,pay}) => {
    try {
        const result = await User.findOneAndUpdate( { uid: id },
            {firstName,lastName,email,phoneNumber,habilitar,image,pay},
            { new: true });
       
        await result.save();
    
        return result;
      } catch (error) {
        throw new Error('Could not update subscription: ' + error.message);
      }
};

module.exports = putUser;