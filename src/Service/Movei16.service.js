const { Movie16 } = require("../model");


const create_movie16_S = (data) => {
    return Movie16.create(data);
};

const get_movie16_s = () => {
    return Movie16.find();
};

const delete_movie16_s = (id) => {
    return Movie16.findByIdAndDelete(id);
};

const put_movie16_s = (id, data) => {
    return Movie16.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie16_S,
    get_movie16_s,
    delete_movie16_s,
    put_movie16_s
};
