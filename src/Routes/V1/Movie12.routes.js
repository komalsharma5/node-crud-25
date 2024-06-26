const express = require("express");
const { Movei12_Controller } = require("../../Controller");

const movei12_router = express.Router();

movei12_router.post(
    "/create-12",
    Movei12_Controller.create_movei12_C
);

movei12_router.get(
    "/get-movie-12",
    Movei12_Controller.get_movie12_C
);

movei12_router.delete(
    "/delete/:movei12id",
    Movei12_Controller.delete_movie12_c
);

movei12_router.put(
    "/update/:movei12id",
    Movei12_Controller.put_movie12_c
);

module.exports = movei12_router;
