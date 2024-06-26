const mongoose = require("mongoose");

const movei25_Schema = mongoose.Schema(
    {
        Movei25_name: {
            type: String,
            trim: true
        },
        Movei25_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei25 = mongoose.model("Movei25", movei25_Schema);

module.exports = movei25;
