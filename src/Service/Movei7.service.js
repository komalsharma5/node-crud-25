const { Movie7 } = require("../model");


const create_movie7_S = (data) => {
    return Movie7.create(data);
};

const get_movie7_s = () => {
    return Movie7.find();
};

const delete_movie7_s = (id) => {
    return Movie7.findByIdAndDelete(id);
};

const put_movie7_s = (id, data) => {
    return Movie7.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie7_S,
    get_movie7_s,
    delete_movie7_s,
    put_movie7_s
};
