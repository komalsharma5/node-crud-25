const mongoose = require("mongoose");

const movei8_Schema = mongoose.Schema(
    {
        Movei8_name: {
            type: String,
            trim: true
        },
        Movei8_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei8 = mongoose.model("Movei8", movei8_Schema);

module.exports = movei8;
