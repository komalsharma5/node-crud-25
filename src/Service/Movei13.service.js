const { Movie13 } = require("../model");


const create_movie13_S = (data) => {
    return Movie13.create(data);
};

const get_movie13_s = () => {
    return Movie13.find();
};

const delete_movie13_s = (id) => {
    return Movie13.findByIdAndDelete(id);
};

const put_movie13_s = (id, data) => {
    return Movie13.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie13_S,
    get_movie13_s,
    delete_movie13_s,
    put_movie13_s
};
