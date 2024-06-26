const { Movie8 } = require("../model");


const create_movie8_S = (data) => {
    return Movie8.create(data);
};

const get_movie8_s = () => {
    return Movie8.find();
};

const delete_movie8_s = (id) => {
    return Movie8.findByIdAndDelete(id);
};

const put_movie8_s = (id, data) => {
    return Movie8.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie8_S,
    get_movie8_s,
    delete_movie8_s,
    put_movie8_s
};
