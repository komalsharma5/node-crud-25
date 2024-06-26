const { Movie5_Service } = require("../Service");


const create_movei5_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei5 = await Movie5_Service.create_movie5_S(data);
        if (!new_movei5) {
            throw new Error("movie not created");
        }

        res.status(200).json({
            success: true,
            message: "create movie",
            data: new_movei5
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const get_movie5_C = async (req, res) => {
    try {
        const data = req.body;
        const new_movei5_list = await Movie5_Service.get_movie5_s(data);
        if (!new_movei5_list) {
            throw new Error("movie not found");
        }
        res.status(200).json({
            success: true,
            message: "get movies",
            data: new_movei5_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const delete_movie5_c = async (req, res) => {
    try {
        const id = req.params.movei5id;
        const new_movei5_delete = await Movie5_Service.delete_movie5_s(id);
        if (!new_movei5_delete) {
            throw new Error("movie not deleted");
        }
        res.status(200).json({
            success: true,
            message: "delete movie",
            data: new_movei5_delete
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const put_movie5_c = async (req, res) => {
    try {
        const id = req.params.movei5id;
        const data = req.body;
        const new_movie5data = await Movie5_Service.put_movie5_s(id, data);
        if (!new_movie5data) {
            throw new Error("movie not updated");
        }
        res.status(200).json({
            success: true,
            message: "update movie",
            data: new_movie5data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
   create_movei5_C,
   get_movie5_C,
   delete_movie5_c,
   put_movie5_c
};
