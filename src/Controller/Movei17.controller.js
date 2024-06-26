const { Movie17_Service } = require("../Service");


const create_movei17_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei17 = await Movie17_Service.create_movie17_S(data);
        if (!new_movei17) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei17
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie17_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei17_list = await Movie17_Service.get_movie17_s(data);
        if (!new_movei17_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei17_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie17_c = async (req, res) => {
    try {
        const id = req.params.movei17id;
        const new_movei17_delete = await Movie17_Service.delete_movie17_s(id);
        if (!new_movei17_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei17_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie17_c = async (req, res) => {
    try {
        const id = req.params.movei17id;
        const data = req.body;
        const new_movie17data = await Movie17_Service.put_movie17_s(id, data);
        if (!new_movie17data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie17data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei17_C,
    get_movie17_C,
    delete_movie17_c,
    put_movie17_c
};
