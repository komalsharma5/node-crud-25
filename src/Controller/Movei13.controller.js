const { Movie13_Service } = require("../Service");


const create_movei13_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei13 = await Movie13_Service.create_movie13_S(data);
        if (!new_movei13) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei13
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie13_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei13_list = await Movie13_Service.get_movie13_s(data);
        if (!new_movei13_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei13_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie13_c = async (req, res) => {
    try {
        const id = req.params.movei13id;
        const new_movei13_delete = await Movie13_Service.delete_movie13_s(id);
        if (!new_movei13_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei13_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie13_c = async (req, res) => {
    try {
        const id = req.params.movei13id;
        const data = req.body;
        const new_movie13data = await Movie13_Service.put_movie13_s(id, data);
        if (!new_movie13data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie13data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei13_C,
    get_movie13_C,
    delete_movie13_c,
    put_movie13_c
};
