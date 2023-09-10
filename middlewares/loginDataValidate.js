exports.loginDataValidate=(req,res,next)=>{
    const {email,password}=req.body
    if(req.body && email && password){
        next()
    }else{
        res.status(400).json({
            success:false,
            message:"all input fields are required"
        })
    }
}