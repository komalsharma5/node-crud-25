const { Movie9_Service } = require("../Service");


const create_movei9_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei9 = await Movie9_Service.create_movie9_S(data);
        if (!new_movei9) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei9
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie9_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei9_list = await Movie9_Service.get_movie9_s(data);
        if (!new_movei9_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei9_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie9_c = async (req, res) => {
    try {
        const id = req.params.movei9id;
        const new_movei9_delete = await Movie9_Service.delete_movie9_s(id);
        if (!new_movei9_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei9_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie9_c = async (req, res) => {
    try {
        const id = req.params.movei9id;
        const data = req.body;
        const new_movie9data = await Movie9_Service.put_movie9_s(id, data);
        if (!new_movie9data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie9data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei9_C,
    get_movie9_C,
    delete_movie9_c,
    put_movie9_c
};
