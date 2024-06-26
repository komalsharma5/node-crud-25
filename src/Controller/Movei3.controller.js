const { Movie3_Service } = require("../Service");


const create_movei3_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei3 = await Movie3_Service.create_movie3_S(data);
        if (!new_movei3) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei3
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie3_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei3_list = await Movie3_Service.get_movie3_s(data);
        if (!new_movei3_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei3_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie3_c = async (req, res) => {
    try {
        const id = req.params.movei3id;
        const new_movei3_delete = await Movie3_Service.delete_movie3_s(id);
        if (!new_movei3_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei3_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie3_c = async (req, res) => {
    try {
        const id = req.params.movei3id;
        const data = req.body;
        const new_movie3data = await Movie3_Service.put_movie3_s(id, data);
        if (!new_movie3data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie3data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei3_C,
    get_movie3_C,
    delete_movie3_c,
    put_movie3_c
};
