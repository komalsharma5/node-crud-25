const { Movie22_Service } = require("../Service");


const create_movei22_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei22 = await Movie22_Service.create_movie22_S(data);
        if (!new_movei22) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei22
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie22_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei22_list = await Movie22_Service.get_movie22_s(data);
        if (!new_movei22_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei22_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie22_c = async (req, res) => {
    try {
        const id = req.params.movei22id;
        const new_movei22_delete = await Movie22_Service.delete_movie22_s(id);
        if (!new_movei22_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei22_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie22_c = async (req, res) => {
    try {
        const id = req.params.movei22id;
        const data = req.body;
        const new_movie22data = await Movie22_Service.put_movie22_s(id, data);
        if (!new_movie22data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie22data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei22_C,
    get_movie22_C,
    delete_movie22_c,
    put_movie22_c
};
