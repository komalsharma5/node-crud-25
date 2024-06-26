const express = require("express")
const { Movie1_Controller } = require("../../Controller")


const movei1_router = express.Router()

movei1_router.post(
    "/create-1",
    //cb controller
    Movie1_Controller.create_movei1_C
)

movei1_router.get(
    "/get-movie-1",
    //cb controller
    Movie1_Controller.get_movie1_C
)

movei1_router.delete(
    "/delete/:movei1id",
    //cb controller
    Movie1_Controller.delete_movie1_c
)

movei1_router.put(
    "/update/:movei1id",
    //cb controller
    Movie1_Controller.put_movei1_c

)
module.exports = movei1_router