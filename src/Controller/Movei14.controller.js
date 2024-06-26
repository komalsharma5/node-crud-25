const { Movie14_Service } = require("../Service");


const create_movei14_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei14 = await Movie14_Service.create_movie14_S(data);
        if (!new_movei14) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei14
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie14_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei14_list = await Movie14_Service.get_movie14_s(data);
        if (!new_movei14_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei14_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie14_c = async (req, res) => {
    try {
        const id = req.params.movei14id;
        const new_movei14_delete = await Movie14_Service.delete_movie14_s(id);
        if (!new_movei14_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei14_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie14_c = async (req, res) => {
    try {
        const id = req.params.movei14id;
        const data = req.body;
        const new_movie14data = await Movie14_Service.put_movie14_s(id, data);
        if (!new_movie14data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie14data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    create_movei14_C,
    get_movie14_C,
    delete_movie14_c,
    put_movie14_c
};
