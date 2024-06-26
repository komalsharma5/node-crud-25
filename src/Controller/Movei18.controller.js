const { Movie18_Service } = require("../Service");


const create_movei18_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei18 = await Movie18_Service.create_movie18_S(data);
        if (!new_movei18) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei18
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie18_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei18_list = await Movie18_Service.get_movie18_s(data);
        if (!new_movei18_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei18_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie18_c = async (req, res) => {
    try {
        const id = req.params.movei18id;
        const new_movei18_delete = await Movie18_Service.delete_movie18_s(id);
        if (!new_movei18_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei18_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie18_c = async (req, res) => {
    try {
        const id = req.params.movei18id;
        const data = req.body;
        const new_movie18data = await Movie18_Service.put_movie18_s(id, data);
        if (!new_movie18data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie18data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei18_C,
    get_movie18_C,
    delete_movie18_c,
    put_movie18_c
};
