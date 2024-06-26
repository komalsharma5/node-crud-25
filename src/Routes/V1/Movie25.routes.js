const express = require("express");
const { Movei25_Controller } = require("../../Controller");

const movei25_router = express.Router();

movei25_router.post(
    "/create-25",
    Movei25_Controller.create_movei25_C
);

movei25_router.get(
    "/get-movie-25",
    Movei25_Controller.get_movie25_C
);

movei25_router.delete(
    "/delete/:movei25id",
    Movei25_Controller.delete_movie25_c
);

movei25_router.put(
    "/update/:movei25id",
    Movei25_Controller.put_movie25_c
);

module.exports = movei25_router;
