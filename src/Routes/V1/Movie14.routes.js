const express = require("express");
const { Movei14_Controller } = require("../../Controller");

const movei14_router = express.Router();

movei14_router.post(
    "/create-14",
    Movei14_Controller.create_movei14_C
);

movei14_router.get(
    "/get-movie-14",
    Movei14_Controller.get_movie14_C
);

movei14_router.delete(
    "/delete/:movei14id",
    Movei14_Controller.delete_movie14_c
);

movei14_router.put(
    "/update/:movei14id",
    Movei14_Controller.put_movie14_c
);

module.exports = movei14_router;
