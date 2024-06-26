const { Movie10 } = require("../model");


const create_movie10_S = (data) => {
    return Movie10.create(data);
};

const get_movie10_s = () => {
    return Movie10.find();
};

const delete_movie10_s = (id) => {
    return Movie10.findByIdAndDelete(id);
};

const put_movie10_s = (id, data) => {
    return Movie10.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie10_S,
    get_movie10_s,
    delete_movie10_s,
    put_movie10_s
};
