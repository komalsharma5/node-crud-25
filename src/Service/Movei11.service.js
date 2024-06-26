const { Movie11 } = require("../model");


const create_movie11_S = (data) => {
    return Movie11.create(data);
};

const get_movie11_s = () => {
    return Movie11.find();
};

const delete_movie11_s = (id) => {
    return Movie11.findByIdAndDelete(id);
};

const put_movie11_s = (id, data) => {
    return Movie11.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie11_S,
    get_movie11_s,
    delete_movie11_s,
    put_movie11_s
};
