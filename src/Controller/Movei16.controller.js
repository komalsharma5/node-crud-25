const { Movie16_Service } = require("../Service");


const create_movei16_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei16 = await Movie16_Service.create_movie16_S(data);
        if (!new_movei16) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei16
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie16_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei16_list = await Movie16_Service.get_movie16_s(data);
        if (!new_movei16_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei16_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie16_c = async (req, res) => {
    try {
        const id = req.params.movei16id;
        const new_movei16_delete = await Movie16_Service.delete_movie16_s(id);
        if (!new_movei16_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei16_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie16_c = async (req, res) => {
    try {
        const id = req.params.movei16id;
        const data = req.body;
        const new_movie16data = await Movie16_Service.put_movie16_s(id, data);
        if (!new_movie16data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie16data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei16_C,
    get_movie16_C,
    delete_movie16_c,
    put_movie16_c
};
