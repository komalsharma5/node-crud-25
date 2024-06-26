const express = require("express");
const { Movei9_Controller } = require("../../Controller");

const movei9_router = express.Router();

movei9_router.post(
    "/create-9",
    Movei9_Controller.create_movei9_C
);

movei9_router.get(
    "/get-movie-9",
    Movei9_Controller.get_movie9_C
);

movei9_router.delete(
    "/delete/:movei9id",
    Movei9_Controller.delete_movie9_c
);

movei9_router.put(
    "/update/:movei9id",
    Movei9_Controller.put_movie9_c
);

module.exports = movei9_router;
