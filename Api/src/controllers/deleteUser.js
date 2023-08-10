const mongoose = require ('mongoose');
const User = require('../models/User')

const deleteUserById = async (id) => { 
try { 
  const user = await User.findByIdAndDelete(id);
return {user, estado: 'eliminado'}
} catch (error) { 
throw new Error ('Error user');
}
}; 
module.exports = {deleteUserById};