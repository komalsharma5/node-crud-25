const express = require("express");
const { Movie2_Controller } = require("../../Controller");

const movei2_router = express.Router();

movei2_router.post(
    "/create-2",
    Movie2_Controller.create_movei2_C
);

movei2_router.get(
    "/get-movie-2",
    Movie2_Controller.get_movie2_C
);

movei2_router.delete(
    "/delete/:movei2id",
    Movie2_Controller.delete_movie2_c
);

movei2_router.put(
    "/update/:movei2id",
    Movie2_Controller.put_movei2_c
);

module.exports = movei2_router;
