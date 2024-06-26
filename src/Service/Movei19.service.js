const { Movie19 } = require("../model");


const create_movie19_S = (data) => {
    return Movie19.create(data);
};

const get_movie19_s = () => {
    return Movie19.find();
};

const delete_movie19_s = (id) => {
    return Movie19.findByIdAndDelete(id);
};

const put_movie19_s = (id, data) => {
    return Movie19.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie19_S,
    get_movie19_s,
    delete_movie19_s,
    put_movie19_s
};
