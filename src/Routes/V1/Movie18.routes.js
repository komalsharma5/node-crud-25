const express = require("express");
const { Movei18_Controller } = require("../../Controller");

const movei18_router = express.Router();

movei18_router.post(
    "/create-18",
    Movei18_Controller.create_movei18_C
);

movei18_router.get(
    "/get-movie-18",
    Movei18_Controller.get_movie18_C
);

movei18_router.delete(
    "/delete/:movei18id",
    Movei18_Controller.delete_movie18_c
);

movei18_router.put(
    "/update/:movei18id",
    Movei18_Controller.put_movie18_c
);

module.exports = movei18_router;
