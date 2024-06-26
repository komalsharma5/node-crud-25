const { Movie21_Service } = require("../Service");


const create_movei21_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei21 = await Movie21_Service.create_movie21_S(data);
        if (!new_movei21) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei21
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie21_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei21_list = await Movie21_Service.get_movie21_s(data);
        if (!new_movei21_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei21_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie21_c = async (req, res) => {
    try {
        const id = req.params.movei21id;
        const new_movei21_delete = await Movie21_Service.delete_movie21_s(id);
        if (!new_movei21_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei21_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie21_c = async (req, res) => {
    try {
        const id = req.params.movei21id;
        const data = req.body;
        const new_movie21data = await Movie21_Service.put_movie21_s(id, data);
        if (!new_movie21data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie21data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei21_C,
    get_movie21_C,
    delete_movie21_c,
    put_movie21_c
};
