const { Movie5 } = require("../model");


const create_movie5_S = (data) => {
    return Movie5.create(data);
};

const get_movie5_s = () => {
    return Movie5.find();
};

const delete_movie5_s = (id) => {
    return Movie5.findByIdAndDelete(id);
};

const put_movie5_s = (id, data) => {
    return Movie5.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie5_S,
    get_movie5_s,
    delete_movie5_s,
    put_movie5_s
};
