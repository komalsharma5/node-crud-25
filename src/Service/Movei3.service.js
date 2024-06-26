const { Movie3 } = require("../model");




const create_movie3_S = (data) => {
    return Movie3.create(data);
};

const get_movie3_s = () => {
    return Movie3.find();
};

const delete_movie3_s = (id) => {
    return Movie3.findByIdAndDelete(id);
};

const put_movie3_s = (id, data) => {
    return Movie3.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie3_S,
    get_movie3_s,
    delete_movie3_s,
    put_movie3_s
};
