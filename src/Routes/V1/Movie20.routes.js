const express = require("express");
const { Movei20_Controller } = require("../../Controller");

const movei20_router = express.Router();

movei20_router.post(
    "/create-20",
    Movei20_Controller.create_movei20_C
);

movei20_router.get(
    "/get-movie-20",
    Movei20_Controller.get_movie20_C
);

movei20_router.delete(
    "/delete/:movei20id",
    Movei20_Controller.delete_movie20_c
);

movei20_router.put(
    "/update/:movei20id",
    Movei20_Controller.put_movie20_c
);

module.exports = movei20_router;
