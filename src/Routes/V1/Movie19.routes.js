const express = require("express");
const { Movei19_Controller } = require("../../Controller");

const movei19_router = express.Router();

movei19_router.post(
    "/create-19",
    Movei19_Controller.create_movei19_C
);

movei19_router.get(
    "/get-movie-19",
    Movei19_Controller.get_movie19_C
);

movei19_router.delete(
    "/delete/:movei19id",
    Movei19_Controller.delete_movie19_c
);

movei19_router.put(
    "/update/:movei19id",
    Movei19_Controller.put_movie19_c
);

module.exports = movei19_router;
