var mongoose = require("mongoose");

var postfeedSchema = mongoose.Schema({
    feedback : String
})

var postfeedModel = mongoose.model("postfeedback",postfeedSchema,"feedback");
module.exports = postfeedModel;