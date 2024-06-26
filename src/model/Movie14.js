const mongoose = require("mongoose");

const movei14_Schema = mongoose.Schema(
    {
        Movei14_name: {
            type: String,
            trim: true
        },
        Movei14_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei14 = mongoose.model("Movei14", movei14_Schema);

module.exports = movei14;
