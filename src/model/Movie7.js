const mongoose = require("mongoose");

const movei7_Schema = mongoose.Schema(
    {
        Movei7_name: {
            type: String,
            trim: true
        },
        Movei7_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei7 = mongoose.model("Movei7", movei7_Schema);

module.exports = movei7;
