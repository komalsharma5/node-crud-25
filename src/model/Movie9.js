const mongoose = require("mongoose");

const movei9_Schema = mongoose.Schema(
    {
        Movei9_name: {
            type: String,
            trim: true
        },
        Movei9_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei9 = mongoose.model("Movei9", movei9_Schema);

module.exports = movei9;
