const { Movie4_Service } = require("../Service");


const create_movei4_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei4 = await Movie4_Service.create_movie4_S(data)
        if (!new_movei4) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei4
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie4_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei4_list = await Movie4_Service.get_movie4_s(data);
        if (!new_movei4_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei4_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie4_c = async (req, res) => {
    try {
        const id = req.params.movei4id;
        const new_movei4_delete = await Movie4_Service.delete_movie4_s(id);
        if (!new_movei4_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei4_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie4_c = async (req, res) => {
    try {
        const id = req.params.movei4id;
        const data = req.body;
        const new_movie4data = await Movie4_Service.put_movie4_s(id, data);
        if (!new_movie4data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie4data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei4_C,
    get_movie4_C,
    delete_movie4_c,
    put_movie4_c
};
