const { Movie25 } = require("../model");


const create_movie25_S = (data) => {
    return Movie25.create(data);
};

const get_movie25_s = () => {
    return Movie25.find();
};

const delete_movie25_s = (id) => {
    return Movie25.findByIdAndDelete(id);
};

const put_movie25_s = (id, data) => {
    return Movie25.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie25_S,
    get_movie25_s,
    delete_movie25_s,
    put_movie25_s
};
