const { Movie19_Service } = require("../Service");


const create_movei19_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei19 = await Movie19_Service.create_movie19_S(data);
        if (!new_movei19) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei19
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie19_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei19_list = await Movie19_Service.get_movie19_s(data);
        if (!new_movei19_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei19_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie19_c = async (req, res) => {
    try {
        const id = req.params.movei19id;
        const new_movei19_delete = await Movie19_Service.delete_movie19_s(id);
        if (!new_movei19_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei19_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie19_c = async (req, res) => {
    try {
        const id = req.params.movei19id;
        const data = req.body;
        const new_movie19data = await Movie19_Service.put_movie19_s(id, data);
        if (!new_movie19data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie19data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei19_C,
    get_movie19_C,
    delete_movie19_c,
    put_movie19_c
};
