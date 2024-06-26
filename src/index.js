const express = require("express");
const connectDB = require("./DB/dbConnect");
const router = require("./Routes/V1");


const app = express()

app.listen(5000,
    ()=>{
        console.log("server run on 5000");
    }
)


app.use(express.json())

app.use("/v1",router)

connectDB()