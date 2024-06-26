const express = require("express");
const { Movei10_Controller } = require("../../Controller");

const movei10_router = express.Router();

movei10_router.post(
    "/create-10",
    Movei10_Controller.create_movei10_C
);

movei10_router.get(
    "/get-movie-10",
    Movei10_Controller.get_movie10_C
);

movei10_router.delete(
    "/delete/:movei10id",
    Movei10_Controller.delete_movie10_c
);

movei10_router.put(
    "/update/:movei10id",
    Movei10_Controller.put_movie10_c
);

module.exports = movei10_router;
