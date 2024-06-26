const { Movie12 } = require("../model");


const create_movie12_S = (data) => {
    return Movie12.create(data);
};

const get_movie12_s = () => {
    return Movie12.find();
};

const delete_movie12_s = (id) => {
    return Movie12.findByIdAndDelete(id);
};

const put_movie12_s = (id, data) => {
    return Movie12.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie12_S,
    get_movie12_s,
    delete_movie12_s,
    put_movie12_s
};
