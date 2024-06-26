const express = require("express");
const { Movie5_Controller } = require("../../Controller");


const movei5_router = express.Router();

movei5_router.post(
    "/create-5",
    Movie5_Controller.create_movei5_C
);

movei5_router.get(
    "/get-movie-5",
    Movie5_Controller.get_movie5_C
);

movei5_router.delete(
    "/delete/:movei5id",
    Movie5_Controller.delete_movie5_c
);

movei5_router.put(
    "/update/:movei5id",
    Movie5_Controller.put_movie5_c
);

module.exports = movei5_router;
