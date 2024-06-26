const express = require("express");
const { Movei17_Controller } = require("../../Controller");

const movei17_router = express.Router();

movei17_router.post(
    "/create-17",
    Movei17_Controller.create_movei17_C
);

movei17_router.get(
    "/get-movie-17",
    Movei17_Controller.get_movie17_C
);

movei17_router.delete(
    "/delete/:movei17id",
    Movei17_Controller.delete_movie17_c
);

movei17_router.put(
    "/update/:movei17id",
    Movei17_Controller.put_movie17_c
);

module.exports = movei17_router;
