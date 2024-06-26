const { Movie24_Service } = require("../Service");


const create_movei24_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei24 = await Movie24_Service.create_movie24_S(data);
        if (!new_movei24) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei24
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie24_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei24_list = await Movie24_Service.get_movie24_s(data);
        if (!new_movei24_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei24_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie24_c = async (req, res) => {
    try {
        const id = req.params.movei24id;
        const new_movei24_delete = await Movie24_Service.delete_movie24_s(id);
        if (!new_movei24_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei24_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie24_c = async (req, res) => {
    try {
        const id = req.params.movei24id;
        const data = req.body;
        const new_movie24data = await Movie24_Service.put_movie24_s(id, data);
        if (!new_movie24data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie24data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei24_C,
    get_movie24_C,
    delete_movie24_c,
    put_movie24_c
};
