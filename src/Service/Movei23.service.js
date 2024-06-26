const { Movie23 } = require("../model");


const create_movie23_S = (data) => {
    return Movie23.create(data);
};

const get_movie23_s = () => {
    return Movie23.find();
};

const delete_movie23_s = (id) => {
    return Movie23.findByIdAndDelete(id);
};

const put_movie23_s = (id, data) => {
    return Movie23.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie23_S,
    get_movie23_s,
    delete_movie23_s,
    put_movie23_s
};
