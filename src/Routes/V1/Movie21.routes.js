const express = require("express");
const { Movei21_Controller } = require("../../Controller");

const movei21_router = express.Router();

movei21_router.post(
    "/create-21",
    Movei21_Controller.create_movei21_C
);

movei21_router.get(
    "/get-movie-21",
    Movei21_Controller.get_movie21_C
);

movei21_router.delete(
    "/delete/:movei21id",
    Movei21_Controller.delete_movie21_c
);

movei21_router.put(
    "/update/:movei21id",
    Movei21_Controller.put_movie21_c
);

module.exports = movei21_router;
