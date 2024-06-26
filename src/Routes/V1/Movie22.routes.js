const express = require("express");
const { Movei22_Controller } = require("../../Controller");

const movei22_router = express.Router();

movei22_router.post(
    "/create-22",
    Movei22_Controller.create_movei22_C
);

movei22_router.get(
    "/get-movie-22",
    Movei22_Controller.get_movie22_C
);

movei22_router.delete(
    "/delete/:movei22id",
    Movei22_Controller.delete_movie22_c
);

movei22_router.put(
    "/update/:movei22id",
    Movei22_Controller.put_movie22_c
);

module.exports = movei22_router;
