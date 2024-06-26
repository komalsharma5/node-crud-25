const { Movie10_Service } = require("../Service");


const create_movei10_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei10 = await Movie10_Service.create_movie10_S(data);
        if (!new_movei10) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei10
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie10_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei10_list = await Movie10_Service.get_movie10_s(data);
        if (!new_movei10_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei10_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie10_c = async (req, res) => {
    try {
        const id = req.params.movei10id;
        const new_movei10_delete = await Movie10_Service.delete_movie10_s(id);
        if (!new_movei10_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei10_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie10_c = async (req, res) => {
    try {
        const id = req.params.movei10id;
        const data = req.body;
        const new_movie10data = await Movie10_Service.put_movie10_s(id, data);
        if (!new_movie10data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie10data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei10_C,
    get_movie10_C,
    delete_movie10_c,
    put_movie10_c
};
