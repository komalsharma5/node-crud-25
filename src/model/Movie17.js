const mongoose = require("mongoose");

const movei17_Schema = mongoose.Schema(
    {
        Movei17_name: {
            type: String,
            trim: true
        },
        Movei17_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei17 = mongoose.model("Movei17", movei17_Schema);

module.exports = movei17;
