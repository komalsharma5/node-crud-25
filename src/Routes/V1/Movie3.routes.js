const express = require("express");
const { Movie3_Controller } = require("../../Controller");



const movei3_router = express.Router();

movei3_router.post(
    "/create-3",
    Movie3_Controller.create_movei3_C
);

movei3_router.get(
    "/get-movie-3",
    Movie3_Controller.get_movie3_C
);

movei3_router.delete(
    "/delete/:movei3id",
    Movie3_Controller.delete_movie3_c
);

movei3_router.put(
    "/update/:movei3id",
    Movie3_Controller.put_movie3_c
);

module.exports = movei3_router;
