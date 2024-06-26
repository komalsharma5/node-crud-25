const { Movie14 } = require("../model");


const create_movie14_S = (data) => {
    return Movie14.create(data);
};

const get_movie14_s = () => {
    return Movie14.find();
};

const delete_movie14_s = (id) => {
    return Movie14.findByIdAndDelete(id);
};

const put_movie14_s = (id, data) => {
    return Movie14.findByIdAndUpdate(id, data);
};

module.exports = {
    create_movie14_S,
    get_movie14_s,
    delete_movie14_s,
    put_movie14_s
};
