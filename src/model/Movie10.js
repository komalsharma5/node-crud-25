const mongoose = require("mongoose");

const movei10_Schema = mongoose.Schema(
    {
        Movei10_name: {
            type: String,
            trim: true
        },
        Movei10_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei10 = mongoose.model("Movei10", movei10_Schema);

module.exports = movei10;
