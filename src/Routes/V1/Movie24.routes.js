const express = require("express");
const { Movei24_Controller } = require("../../Controller");

const movei24_router = express.Router();

movei24_router.post(
    "/create-24",
    Movei24_Controller.create_movei24_C
);

movei24_router.get(
    "/get-movie-24",
    Movei24_Controller.get_movie24_C
);

movei24_router.delete(
    "/delete/:movei24id",
    Movei24_Controller.delete_movie24_c
);

movei24_router.put(
    "/update/:movei24id",
    Movei24_Controller.put_movie24_c
);

module.exports = movei24_router;
