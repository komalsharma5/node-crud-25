const mongoose = require("mongoose");

const movei12_Schema = mongoose.Schema(
    {
        Movei12_name: {
            type: String,
            trim: true
        },
        Movei12_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei12 = mongoose.model("Movei12", movei12_Schema);

module.exports = movei12;
