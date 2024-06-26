const mongoose = require("mongoose");

const movei18_Schema = mongoose.Schema(
    {
        Movei18_name: {
            type: String,
            trim: true
        },
        Movei18_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei18 = mongoose.model("Movei18", movei18_Schema);

module.exports = movei18;
