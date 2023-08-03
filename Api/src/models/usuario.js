const mongoose = require ("mongoose");
const {Schema} = mongoose;

const users = new Schema({
id : {type: Schema.Types.ObjectId},
fullName:  { type: String },
email: {type : Schema.Types.Mixed},
password:{type : Schema.Types.Mixed},

});
export default mongoose.model('User' ,users)

