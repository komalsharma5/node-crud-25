const mongoose = require("mongoose");

const movei20_Schema = mongoose.Schema(
    {
        Movei20_name: {
            type: String,
            trim: true
        },
        Movei20_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei20 = mongoose.model("Movei20", movei20_Schema);

module.exports = movei20;
