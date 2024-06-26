const { Movie2 } = require("../model");


const create_movie2_S = (data) => {
    return Movie2.create(data);
};

const get_movei2_s = () => {
    return Movie2.find();
};

const delete_movie2_s = (id) => {
    return Movie2.findByIdAndDelete(id);
};

const put_movie2_s = (id, data) => {
    return Movie2.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie2_S,
    get_movei2_s,
    delete_movie2_s,
    put_movie2_s
};
