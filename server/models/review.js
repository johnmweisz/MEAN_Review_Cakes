var mongoose = require("mongoose");
var validate = require("mongoose-validator");

const ReviewSchema = new mongoose.Schema({
    rating: {
        required: [true, "rating is required"],
        type: Number,
        min: [1, "must be at least 1 star"],
        max: [5, "must be at most 5 stars"]
    },
    comment: {
        required: [true, "comment is required"],
        type: String
    },
    cake_id: {
        required: [true, "cake is required"],
        type: String
    }

}, { timestamps: true});
    
mongoose.model("Review", ReviewSchema);