const mongoose = require("mongoose");

const movei2_Schema = mongoose.Schema(
    {
        Movei2_name: {
            type: String,
            trim: true
        },
        Movei2_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei2 = mongoose.model("Movie2", movei2_Schema);

module.exports = movei2;
