const { Movie1_Service } = require("../Service")

const create_movei1_C = async(req,res) =>{
    try {
        
        const data = req.body
        const new_movei1 = await Movie1_Service.create_movie1_S(data)
        if(!new_movei1){
            throw new Error("movei not create")
        }

        res.status(200).json({
            success:true,
            message:"create movie",
            data:new_movei1
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const get_movie1_C = async(req,res)=>{
    try {
        
        const data = req.body
        const new_movei1_list = await Movie1_Service.get_movei1_s(data)
        if(!new_movei1_list){
            throw new Error("movei not create")
        }
        res.status(200).json({
            success:true,
            message:"create movie",
            data:new_movei1_list     
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const delete_movie1_c = async(req,res)=>{
    try {
        
        const id = req.params.movei1id
        const new_movei1_delete = await Movie1_Service.delete_movie1_s(id)
        
        if(!new_movei1_delete){
            throw new Error("movei not create")
        }
        res.status(200).json({
            success:true,
            message:"create movie",
            data:new_movei1_delete    
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

const put_movei1_c = async(req,res)=>{
    try {
        
        const id = req.params.movei1id
        const data = req.body
        
        const new_movie1data = await Movie1_Service.put_movie1_s(id,data)
        if(!new_movie1data){
            throw new Error("movei not create")
        }
        res.status(200).json({
            success:true,
            message:"create movie",
            data:new_movie1data   
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
module.exports = {
    create_movei1_C,
    get_movie1_C,
    delete_movie1_c,
    put_movei1_c
}