const { Movie6_Service } = require("../Service");


const create_movei6_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei6 = await Movie6_Service.create_movie6_S(data);
        if (!new_movei6) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei6
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie6_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei6_list = await Movie6_Service.get_movie6_s(data);
        if (!new_movei6_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei6_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie6_c = async (req, res) => {
    try {
        const id = req.params.movei6id;
        const new_movei6_delete = await Movie6_Service.delete_movie6_s(id);
        if (!new_movei6_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei6_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie6_c = async (req, res) => {
    try {
        const id = req.params.movei6id;
        const data = req.body;
        const new_movie6data = await Movie6_Service.put_movie6_s(id, data);
        if (!new_movie6data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie6data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei6_C,
    get_movie6_C,
    delete_movie6_c,
    put_movie6_c
};
