const { Movie24 } = require("../model");


const create_movie24_S = (data) => {
    return Movie24.create(data);
};

const get_movie24_s = () => {
    return Movie24.find();
};

const delete_movie24_s = (id) => {
    return Movie24.findByIdAndDelete(id);
};

const put_movie24_s = (id, data) => {
    return Movie24.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie24_S,
    get_movie24_s,
    delete_movie24_s,
    put_movie24_s
};
