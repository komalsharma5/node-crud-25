const express = require("express");
const { Movei15_Controller } = require("../../Controller");

const movei15_router = express.Router();

movei15_router.post(
    "/create-15",
    Movei15_Controller.create_movei15_C
);

movei15_router.get(
    "/get-movie-15",
    Movei15_Controller.get_movie15_C
);

movei15_router.delete(
    "/delete/:movei15id",
    Movei15_Controller.delete_movie15_c
);

movei15_router.put(
    "/update/:movei15id",
    Movei15_Controller.put_movie15_c
);

module.exports = movei15_router;
