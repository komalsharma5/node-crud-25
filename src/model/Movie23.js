const mongoose = require("mongoose");

const movei23_Schema = mongoose.Schema(
    {
        Movei23_name: {
            type: String,
            trim: true
        },
        Movei23_rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const movei23 = mongoose.model("Movei23", movei23_Schema);

module.exports = movei23;
