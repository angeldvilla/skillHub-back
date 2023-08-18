const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  uid: {
    type: String,
    required: true,
    index: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
   
  },
  image: {
    type: String,
  }
 
});

const User = mongoose.model("User", usersSchema);
module.exports = User;
