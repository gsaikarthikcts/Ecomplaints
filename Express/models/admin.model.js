var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({
  username: String,
  password: String
})

var Admin = mongoose.model("admin",adminSchema,"adminlogin");
module.exports = Admin;