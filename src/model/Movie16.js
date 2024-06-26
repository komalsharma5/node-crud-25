const mongoose = require("mongoose");

const movei16_Schema = mongoose.Schema(
    {
        Movei16_name: {
            type: String,
            trim: true
        },
        Movei16_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei16 = mongoose.model("Movei16", movei16_Schema);

module.exports = movei16;
