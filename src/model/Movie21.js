const mongoose = require("mongoose");

const movei21_Schema = mongoose.Schema(
    {
        Movei21_name: {
            type: String,
            trim: true
        },
        Movei21_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei21 = mongoose.model("Movei21", movei21_Schema);

module.exports = movei21;
