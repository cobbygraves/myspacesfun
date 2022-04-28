const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Required",
  },
  password: {
    type: String,
    required: "Required",
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
