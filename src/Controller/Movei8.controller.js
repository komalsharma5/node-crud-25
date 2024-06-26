const { Movie8_Service } = require("../Service");


const create_movei8_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei8 = await Movie8_Service.create_movie8_S(data);
        if (!new_movei8) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei8
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie8_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei8_list = await Movie8_Service.get_movie8_s(data);
        if (!new_movei8_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei8_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie8_c = async (req, res) => {
    try {
        const id = req.params.movei8id;
        const new_movei8_delete = await Movie8_Service.delete_movie8_s(id);
        if (!new_movei8_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei8_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie8_c = async (req, res) => {
    try {
        const id = req.params.movei8id;
        const data = req.body;
        const new_movie8data = await Movie8_Service.put_movie8_s(id, data);
        if (!new_movie8data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie8data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei8_C,
    get_movie8_C,
    delete_movie8_c,
    put_movie8_c
};
