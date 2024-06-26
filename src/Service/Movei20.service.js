const { Movie20 } = require("../model");


const create_movie20_S = (data) => {
    return Movie20.create(data);
};

const get_movie20_s = () => {
    return Movie20.find();
};

const delete_movie20_s = (id) => {
    return Movie20.findByIdAndDelete(id);
};

const put_movie20_s = (id, data) => {
    return Movie20.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie20_S,
    get_movie20_s,
    delete_movie20_s,
    put_movie20_s
};
