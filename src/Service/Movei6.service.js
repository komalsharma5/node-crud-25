const { Movie6 } = require("../model");


const create_movie6_S = (data) => {
    return Movie6.create(data);
};

const get_movie6_s = () => {
    return Movie6.find();
};

const delete_movie6_s = (id) => {
    return Movie6.findByIdAndDelete(id);
};

const put_movie6_s = (id, data) => {
    return Movie6.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie6_S,
    get_movie6_s,
    delete_movie6_s,
    put_movie6_s
};
