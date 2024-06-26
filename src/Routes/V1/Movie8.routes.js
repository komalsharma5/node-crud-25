const express = require("express");
const { Movei8_Controller } = require("../../Controller");

const movei8_router = express.Router();

movei8_router.post(
    "/create-8",
    Movei8_Controller.create_movei8_C
);

movei8_router.get(
    "/get-movie-8",
    Movei8_Controller.get_movie8_C
);

movei8_router.delete(
    "/delete/:movei8id",
    Movei8_Controller.delete_movie8_c
);

movei8_router.put(
    "/update/:movei8id",
    Movei8_Controller.put_movie8_c
);

module.exports = movei8_router;
