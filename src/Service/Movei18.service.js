const { Movie18 } = require("../model");


const create_movie18_S = (data) => {
    return Movie18.create(data);
};

const get_movie18_s = () => {
    return Movie18.find();
};

const delete_movie18_s = (id) => {
    return Movie18.findByIdAndDelete(id);
};

const put_movie18_s = (id, data) => {
    return Movie18.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie18_S,
    get_movie18_s,
    delete_movie18_s,
    put_movie18_s
};
