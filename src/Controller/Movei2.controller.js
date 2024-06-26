const { Movie2_Service } = require("../Service");

const create_movei2_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei2 = await Movie2_Service.create_movie2_S(data);
        if (!new_movei2) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei2
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie2_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei2_list = await Movie2_Service.get_movei2_s(data);
        if (!new_movei2_list) {
            throw new Error("movie not created");
        }
        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei2_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie2_c = async (req, res) => {
    try {
        const id = req.params.movei2id;
        const new_movei2_delete = await Movie2_Service.delete_movie2_s(id);
        if (!new_movei2_delete) {
            throw new Error("movie not created");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei2_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movei2_c = async (req, res) => {
    try {
        const id = req.params.movei2id;
        const data = req.body;
        const new_movie2data = await Movie2_Service.put_movie2_s(id, data);
        if (!new_movie2data) {
            throw new Error("movie not created");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie2data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei2_C,
    get_movie2_C,
    delete_movie2_c,
    put_movei2_c
};
