const { Movie23_Service } = require("../Service");


const create_movei23_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei23 = await Movie23_Service.create_movie23_S(data);
        if (!new_movei23) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei23
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie23_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei23_list = await Movie23_Service.get_movie23_s(data);
        if (!new_movei23_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei23_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie23_c = async (req, res) => {
    try {
        const id = req.params.movei23id;
        const new_movei23_delete = await Movie23_Service.delete_movie23_s(id);
        if (!new_movei23_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei23_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie23_c = async (req, res) => {
    try {
        const id = req.params.movei23id;
        const data = req.body;
        const new_movie23data = await Movie23_Service.put_movie23_s(id, data);
        if (!new_movie23data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie23data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei23_C,
    get_movie23_C,
    delete_movie23_c,
    put_movie23_c
};
