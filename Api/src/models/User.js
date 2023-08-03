const mongoose = require ("mongoose");
const {Schema} = mongoose;

const users = new Schema({
fullName: {
     type: String,
     required: true,
},
email: {
    type : Schema.Types.Mixed,
    required: true,
    unique: true
},
password: {
    type : Schema.Types.Mixed,
    required: true,
},
});
const User = mongoose.model('User' ,users);
module.exports = User;

