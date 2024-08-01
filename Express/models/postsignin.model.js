var mongoose = require("mongoose");

var postsigninSchema = mongoose.Schema({
    email : String,
    password: String
})

var postsigninModel = mongoose.model("signin",postsigninSchema,"customerlogin");
module.exports = postsigninModel;