const { Movie1 } = require("../model")
const movei1 = require("../model/Movie.1")

const create_movie1_S = (data)=>{
    return Movie1.create(data)
}

const get_movei1_s = ()=>{
    return Movie1.find()
}

const delete_movie1_s = (id)=>{
    return Movie1.findByIdAndDelete(id)
}

const put_movie1_s = (id,data) =>{
    return movei1.findByIdAndUpdate(id, data)
}
module.exports = {
    create_movie1_S,
    get_movei1_s,
    delete_movie1_s,
    put_movie1_s
}