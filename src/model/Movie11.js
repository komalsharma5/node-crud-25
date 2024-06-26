const mongoose = require("mongoose");

const movei11_Schema = mongoose.Schema(
    {
        Movei11_name: {
            type: String,
            trim: true
        },
        Movei11_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei11 = mongoose.model("Movei11", movei11_Schema);

module.exports = movei11;
