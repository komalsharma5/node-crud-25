const mongoose = require("mongoose");

const movei4_Schema = mongoose.Schema(
    {
        Movei4_name: {
            type: String,
            trim: true
        },
        Movei4_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei4 = mongoose.model("Movei4", movei4_Schema);

module.exports = movei4;
