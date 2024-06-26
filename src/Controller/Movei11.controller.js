const { Movie11_Service } = require("../Service");

const create_movei11_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei11 = await Movie11_Service.create_movie11_S(data);
        if (!new_movei11) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei11
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie11_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei11_list = await Movie11_Service.get_movie11_s(data);
        if (!new_movei11_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei11_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie11_c = async (req, res) => {
    try {
        const id = req.params.movei11id;
        const new_movei11_delete = await Movie11_Service.delete_movie11_s(id);
        if (!new_movei11_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei11_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie11_c = async (req, res) => {
    try {
        const id = req.params.movei11id;
        const data = req.body;
        const new_movie11data = await Movie11_Service.put_movie11_s(id, data);
        if (!new_movie11data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie11data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei11_C,
    get_movie11_C,
    delete_movie11_c,
    put_movie11_c
};
