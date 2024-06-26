const { Movie4 } = require("../model");



const create_movie4_S = (data) => {
    return Movie4.create(data);
};

const get_movie4_s = () => {
    return Movie4.find();
};

const delete_movie4_s = (id) => {
    return Movie4.findByIdAndDelete(id);
};

const put_movie4_s = (id, data) => {
    return Movie4.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie4_S,
    get_movie4_s,
    delete_movie4_s,
    put_movie4_s
};
