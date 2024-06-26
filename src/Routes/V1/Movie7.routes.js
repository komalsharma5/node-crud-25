const express = require("express");
const { Movei7_Controller } = require("../../Controller");


const movei7_router = express.Router();

movei7_router.post(
    "/create-7",
    Movei7_Controller.create_movei7_C
);

movei7_router.get(
    "/get-movie-7",
    Movei7_Controller.get_movie7_C
);

movei7_router.delete(
    "/delete/:movei7id",
    Movei7_Controller.delete_movie7_c
);

movei7_router.put(
    "/update/:movei7id",
    Movei7_Controller.put_movie7_c
);

module.exports = movei7_router;
