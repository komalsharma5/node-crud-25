const mongoose = require("mongoose");

const movei6_Schema = mongoose.Schema(
    {
        Movei6_name: {
            type: String,
            trim: true
        },
        Movei6_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei6 = mongoose.model("Movei6", movei6_Schema);

module.exports = movei6;
