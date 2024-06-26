const mongoose = require("mongoose");

const movei22_Schema = mongoose.Schema(
    {
        Movei22_name: {
            type: String,
            trim: true
        },
        Movei22_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei22 = mongoose.model("Movei22", movei22_Schema);

module.exports = movei22;
