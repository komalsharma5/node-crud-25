const express = require("express");
const { Movei13_Controller } = require("../../Controller");

const movei13_router = express.Router();

movei13_router.post(
    "/create-13",
    Movei13_Controller.create_movei13_C
);

movei13_router.get(
    "/get-movie-13",
    Movei13_Controller.get_movie13_C
);

movei13_router.delete(
    "/delete/:movei13id",
    Movei13_Controller.delete_movie13_c
);

movei13_router.put(
    "/update/:movei13id",
    Movei13_Controller.put_movie13_c
);

module.exports = movei13_router;
