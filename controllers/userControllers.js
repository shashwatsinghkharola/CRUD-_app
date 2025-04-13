const User = require('../models/userModels.js')
exports. home = (req , res)=>{
    res.send('hello world')
}
// storing in Db

exports.createUser = async(req,res)=>{


       // extract info
    try{    
           const {name , email} = req.body
           if(!name || !email){
            throw new Error("name and email required")
        }
        const isExits = User.findOne({email})
         if(isExists){
            throw new Error("User alerady Exists")
         }
           const user = await User.create({
            name,
            email
        })
     
        res.status(201).json({
            sucess: true,
            message: 'User created succesfully',
            user
        })
    }
    catch(error){
        console.log(error)
        res.status(400).json({
            sucess: false,
            message: error.message,
        })
    }
}

exports.getUsers = async (req , res)=>{
    try {
        const user = await User.find({})

        res.status(200).json({
            sucess:true,
            user
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteUsers = async (req , res)=>{
      try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
              sucess: true,
              message: 'user deleted sucessfully'
        })
      } catch (error) {
         console.log(error)
         res.status(400).json({
            success: false,
            message: message.error
         })
      }
}

exports.updateUser = async (req , res )=>{
      try {
        const user = await User.findByIdAndUpdate(req.params.id , req.body)
        res.status(200).json({
            sucess:true,
            message:'User updated succesfully'
        })
        
      } catch (error) {
        console.log(error)
         res.status(400).json({
            success: false,
            message: message.error
         })
      }
}
