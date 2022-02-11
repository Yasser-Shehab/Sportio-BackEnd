const express= require("express");
const {getAllUsers,register,login,profile} =require("../controllers/user.controller")

const router=express.Router();

router.get('/',getAllUsers)


router.post('/register',register)

router.post('/login',login)

router.get('/profile', profile)



module.exports= router;