const express = require("express");
const { Movie6_Controller } = require("../../Controller");


const movei6_router = express.Router();

movei6_router.post(
    "/create-6",
    Movie6_Controller.create_movei6_C
);

movei6_router.get(
    "/get-movie-6",
    Movie6_Controller.get_movie6_C
);

movei6_router.delete(
    "/delete/:movei6id",
    Movie6_Controller.delete_movie6_c
);

movei6_router.put(
    "/update/:movei6id",
    Movie6_Controller.put_movie6_c
);

module.exports = movei6_router;
