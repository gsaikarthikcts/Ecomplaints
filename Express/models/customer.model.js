var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
  username: String,
  password: String
})

var Customer = mongoose.model("Customer",customerSchema,"customerlogin");
module.exports = Customer;