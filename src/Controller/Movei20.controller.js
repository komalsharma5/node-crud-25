const { Movie20_Service } = require("../Service");


const create_movei20_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei20 = await Movie20_Service.create_movie20_S(data);
        if (!new_movei20) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei20
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie20_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei20_list = await Movie20_Service.get_movie20_s(data);
        if (!new_movei20_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei20_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie20_c = async (req, res) => {
    try {
        const id = req.params.movei20id;
        const new_movei20_delete = await Movie20_Service.delete_movie20_s(id);
        if (!new_movei20_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei20_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie20_c = async (req, res) => {
    try {
        const id = req.params.movei20id;
        const data = req.body;
        const new_movie20data = await Movie20_Service.put_movie20_s(id, data);
        if (!new_movie20data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie20data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei20_C,
    get_movie20_C,
    delete_movie20_c,
    put_movie20_c
};
