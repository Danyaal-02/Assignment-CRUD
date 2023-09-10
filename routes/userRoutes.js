const express=require('express')
const{registerUser,loginUser}=require('../controllers/userController.js')
const{registerDataValidate}=require('../middlewares/registerDataValidate.js')
const{loginDataValidate}=require('../middlewares/loginDataValidate.js')
const router=express.Router()

router.post('/registerUser',registerDataValidate,registerUser)
router.post('/loginUser',loginDataValidate,loginUser)
module.exports=router