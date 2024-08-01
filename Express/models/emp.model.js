// step 2
var mongoose = require("mongoose");

var empSchema = mongoose.Schema({
    name : String,
    phonenumber : Number,
    complaintid : Number,
    email : String,
    subject : String,
    complaint : String,
    priority : String,
    status : String
})

var empModel = mongoose.model("userDetails",empSchema,"userDetails");
module.exports = empModel;