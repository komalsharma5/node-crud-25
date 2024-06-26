const { Movie7_Service } = require("../Service");


const create_movei7_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei7 = await Movie7_Service.create_movie7_S(data);
        if (!new_movei7) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei7
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie7_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei7_list = await Movie7_Service.get_movie7_s(data);
        if (!new_movei7_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei7_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie7_c = async (req, res) => {
    try {
        const id = req.params.movei7id;
        const new_movei7_delete = await Movie7_Service.delete_movie7_s(id);
        if (!new_movei7_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei7_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie7_c = async (req, res) => {
    try {
        const id = req.params.movei7id;
        const data = req.body;
        const new_movie7data = await Movie7_Service.put_movie7_s(id, data);
        if (!new_movie7data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie7data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei7_C,
    get_movie7_C,
    delete_movie7_c,
    put_movie7_c
};
