const mongoose = require("mongoose")

const movei3_Schema = mongoose.Schema(
    {
        Movei3_name:{
            type:String,
            trim:true
        },
        Movei3_rating :{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    })

const movei3 = mongoose.model("Movie3",movei3_Schema)

module.exports = movei3
