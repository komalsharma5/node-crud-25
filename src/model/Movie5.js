const mongoose = require("mongoose");

const movei5_Schema = mongoose.Schema(
    {
        Movei5_name: {
            type: String,
            trim: true
        },
        Movei5_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei5 = mongoose.model("Movei5", movei5_Schema);

module.exports = movei5;
