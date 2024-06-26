const express = require("express");
const { Movei23_Controller } = require("../../Controller");

const movei23_router = express.Router();

movei23_router.post(
    "/create-23",
    Movei23_Controller.create_movei23_C
);

movei23_router.get(
    "/get-movie-23",
    Movei23_Controller.get_movie23_C
);

movei23_router.delete(
    "/delete/:movei23id",
    Movei23_Controller.delete_movie23_c
);

movei23_router.put(
    "/update/:movei23id",
    Movei23_Controller.put_movie23_c
);

module.exports = movei23_router;
