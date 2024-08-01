var mongoose = require("mongoose");

var postSchema = mongoose.Schema({
    name : String,
    phonenumber : Number,
    complaintid : Number,
    email : String,
    subject : String,
    complaint : String
})

var postModel = mongoose.model("adduser",postSchema,"userDetails");
module.exports = postModel;