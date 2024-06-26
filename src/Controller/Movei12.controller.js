const { Movie12_Service } = require("../Service");


const create_movei12_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei12 = await Movie12_Service.create_movie12_S(data);
        if (!new_movei12) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei12
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie12_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei12_list = await Movie12_Service.get_movie12_s(data);
        if (!new_movei12_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei12_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie12_c = async (req, res) => {
    try {
        const id = req.params.movei12id;
        const new_movei12_delete = await Movie12_Service.delete_movie12_s(id);
        if (!new_movei12_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei12_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie12_c = async (req, res) => {
    try {
        const id = req.params.movei12id;
        const data = req.body;
        const new_movie12data = await Movie12_Service.put_movie12_s(id, data);
        if (!new_movie12data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie12data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei12_C,
    get_movie12_C,
    delete_movie12_c,
    put_movie12_c
};
