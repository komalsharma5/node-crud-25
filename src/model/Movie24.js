const mongoose = require("mongoose");

const movei24_Schema = mongoose.Schema(
    {
        Movei24_name: {
            type: String,
            trim: true
        },
        Movei24_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei24 = mongoose.model("Movei24", movei24_Schema);

module.exports = movei24;
