const mongoose = require("mongoose");

const movei19_Schema = mongoose.Schema(
    {
        Movei19_name: {
            type: String,
            trim: true
        },
        Movei19_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei19 = mongoose.model("Movei19", movei19_Schema);

module.exports = movei19;
