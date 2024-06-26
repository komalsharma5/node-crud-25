const { Movie15_Service } = require("../Service");


const create_movei15_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei15 = await Movie15_Service.create_movie15_S(data);
        if (!new_movei15) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei15
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie15_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei15_list = await Movie15_Service.get_movie15_s(data);
        if (!new_movei15_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei15_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie15_c = async (req, res) => {
    try {
        const id = req.params.movei15id;
        const new_movei15_delete = await Movie15_Service.delete_movie15_s(id);
        if (!new_movei15_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei15_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie15_c = async (req, res) => {
    try {
        const id = req.params.movei15id;
        const data = req.body;
        const new_movie15data = await Movie15_Service.put_movie15_s(id, data);
        if (!new_movie15data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie15data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei15_C,
    get_movie15_C,
    delete_movie15_c,
    put_movie15_c
};
