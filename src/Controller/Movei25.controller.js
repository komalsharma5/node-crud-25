const { Movie25_Service } = require("../Service");


const create_movei25_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei25 = await Movie25_Service.create_movie25_S(data);
        if (!new_movei25) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei25
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie25_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei25_list = await Movie25_Service.get_movie25_s(data);
        if (!new_movei25_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei25_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie25_c = async (req, res) => {
    try {
        const id = req.params.movei25id;
        const new_movei25_delete = await Movie25_Service.delete_movie25_s(id);
        if (!new_movei25_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei25_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie25_c = async (req, res) => {
    try {
        const id = req.params.movei25id;
        const data = req.body;
        const new_movie25data = await Movie25_Service.put_movie25_s(id, data);
        if (!new_movie25data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie25data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei25_C,
    get_movie25_C,
    delete_movie25_c,
    put_movie25_c
};
