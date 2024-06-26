const mongoose = require("mongoose")

const movei1_Schema = mongoose.Schema(
    {
        Movei1_name:{
            type:String,
            trim:true
        },
        Movei1_rating :{
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    })

    const movei1 = mongoose.model("Movie1",movei1_Schema)

    module.exports = movei1