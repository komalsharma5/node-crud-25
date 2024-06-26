const { Movie17 } = require("../model");


const create_movie17_S = (data) => {
    return Movie17.create(data);
};

const get_movie17_s = () => {
    return Movie17.find();
};

const delete_movie17_s = (id) => {
    return Movie17.findByIdAndDelete(id);
};

const put_movie17_s = (id, data) => {
    return Movie17.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie17_S,
    get_movie17_s,
    delete_movie17_s,
    put_movie17_s
};
