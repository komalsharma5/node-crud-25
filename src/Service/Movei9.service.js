const { Movie9 } = require("../model");


const create_movie9_S = (data) => {
    return Movie9.create(data);
};

const get_movie9_s = () => {
    return Movie9.find();
};

const delete_movie9_s = (id) => {
    return Movie9.findByIdAndDelete(id);
};

const put_movie9_s = (id, data) => {
    return Movie9.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie9_S,
    get_movie9_s,
    delete_movie9_s,
    put_movie9_s
};
