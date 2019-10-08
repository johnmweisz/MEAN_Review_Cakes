var mongoose = require("mongoose");
var validate = require("mongoose-validator");

const CakeSchema = new mongoose.Schema({
    baker: {
        required: [true, "baker is required"],
        type: String,
    },
    url: {
        required: [true, "url is required"],
        type: String
    },
    reviews: []

}, { timestamps: true});
    
mongoose.model("Cake", CakeSchema);