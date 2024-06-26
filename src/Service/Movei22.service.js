const { Movie22 } = require("../model");


const create_movie22_S = (data) => {
    return Movie22.create(data);
};

const get_movie22_s = () => {
    return Movie22.find();
};

const delete_movie22_s = (id) => {
    return Movie22.findByIdAndDelete(id);
};

const put_movie22_s = (id, data) => {
    return Movie22.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie22_S,
    get_movie22_s,
    delete_movie22_s,
    put_movie22_s
};
