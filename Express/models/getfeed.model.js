var mongoose = require("mongoose");

var getfeedSchema = mongoose.Schema({
    feedback : String
})

var getfeedModel = mongoose.model("",getfeedSchema,"feedback");
module.exports = getfeedModel;