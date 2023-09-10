const userModel=require('../models/userModels.js')

//to register user
exports.registerUser=async(req,res)=>{
    try {
        //checking if user already exists or not
        const {email}=req.body
        const userExists=await userModel.findOne({email})
        if(userExists){
            throw new Error("User already exists")
        }
        // creating a document in database
        await userModel.create({...req.body})
        res.status(200).json({
            success:true,
            message:"User created Successfully",
            userModel
        })
    } catch (error) {
        console.log(error)
        res.status(501).json({
            success:false,
            message:error.message
        })
    }
}

//to login user
exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        //checking if user already exists or not
        const userData=await userModel.findOne({email})
        if(userData){
            // checking password provided by user is correct or not
            if(userData.password==password){
                res.status(200).json({
                    success:true,
                    message:"User Login Successful, Enjoy!"
            })
            }else{
                throw new Error("You have Entered Wrong Password")
            }
        }else{
            throw new Error("No Account Find associated to this email")
        }
    } catch (error) {
        console.log(error)
        res.status(501).json({
            success:false,
            message:error.message
        })
    }
}