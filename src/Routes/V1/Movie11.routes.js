const express = require("express");
const { Movei11_Controller } = require("../../Controller");

const movei11_router = express.Router();

movei11_router.post(
    "/create-11",
    Movei11_Controller.create_movei11_C
);

movei11_router.get(
    "/get-movie-11",
    Movei11_Controller.get_movie11_C
);

movei11_router.delete(
    "/delete/:movei11id",
    Movei11_Controller.delete_movie11_c
);

movei11_router.put(
    "/update/:movei11id",
    Movei11_Controller.put_movie11_c
);

module.exports = movei11_router;
