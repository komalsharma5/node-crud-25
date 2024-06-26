const mongoose = require("mongoose");

const movei15_Schema = mongoose.Schema(
    {
        Movei15_name: {
            type: String,
            trim: true
        },
        Movei15_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei15 = mongoose.model("Movei15", movei15_Schema);

module.exports = movei15;
