const { Movie21 } = require("../model");


const create_movie21_S = (data) => {
    return Movie21.create(data);
};

const get_movie21_s = () => {
    return Movie21.find();
};

const delete_movie21_s = (id) => {
    return Movie21.findByIdAndDelete(id);
};

const put_movie21_s = (id, data) => {
    return Movie21.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie21_S,
    get_movie21_s,
    delete_movie21_s,
    put_movie21_s
};
