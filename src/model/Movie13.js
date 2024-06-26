const mongoose = require("mongoose");

const movei13_Schema = mongoose.Schema(
    {
        Movei13_name: {
            type: String,
            trim: true
        },
        Movei13_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei13 = mongoose.model("Movei13", movei13_Schema);

module.exports = movei13;
