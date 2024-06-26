const express = require("express");
const { Movie4_Controller } = require("../../Controller");


const movei4_router = express.Router();

movei4_router.post(
    "/create-4",
    Movie4_Controller.create_movei4_C
);

movei4_router.get(
    "/get-movie-4",
    Movie4_Controller.get_movie4_C
);

movei4_router.delete(
    "/delete/:movei4id",
    Movie4_Controller.delete_movie4_c
);

movei4_router.put(
    "/update/:movei4id",
    Movie4_Controller.put_movie4_c
);

module.exports = movei4_router;
