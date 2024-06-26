const { Movie15 } = require("../model");


const create_movie15_S = (data) => {
    return Movie15.create(data);
};

const get_movie15_s = () => {
    return Movie15.find();
};

const delete_movie15_s = (id) => {
    return Movie15.findByIdAndDelete(id);
};

const put_movie15_s = (id, data) => {
    return Movie15.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie15_S,
    get_movie15_s,
    delete_movie15_s,
    put_movie15_s
};
