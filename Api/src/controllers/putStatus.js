const User = require("../models/User");


const putStatus = async (_id, habilitar) =>{
    const user = await User.findOneAndUpdate(
        { _id },
        { $set: { habilitar } },
        { new: true }
    )
    return user
}

module.exports = {putStatus}