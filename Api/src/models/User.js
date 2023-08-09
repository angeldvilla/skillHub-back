const mongoose = require("mongoose");
const { Schema } = mongoose;

const users = new Schema({
  uid: {
    type: String,
    required: true,
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
    type: Schema.Types.Mixed,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", users);
module.exports = User;
