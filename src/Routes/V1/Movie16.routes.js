const express = require("express");
const { Movei16_Controller } = require("../../Controller");

const movei16_router = express.Router();

movei16_router.post(
    "/create-16",
    Movei16_Controller.create_movei16_C
);

movei16_router.get(
    "/get-movie-16",
    Movei16_Controller.get_movie16_C
);

movei16_router.delete(
    "/delete/:movei16id",
    Movei16_Controller.delete_movie16_c
);

movei16_router.put(
    "/update/:movei16id",
    Movei16_Controller.put_movie16_c
);

module.exports = movei16_router;
