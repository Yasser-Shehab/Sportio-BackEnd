const User = require('../models/User')


const getAllUsers =  async (req,res)=>{
  
   res.send("All users")
}
const register=  async (req,res)=>{
  try{
   const {name,email,password}=req.body; 
   const user = await User.create({
      name,
      email,
      password
   })
    res.status(201).send(user);
  }catch(err){
   res.status(400).send(err.message);
  }
 }

 
const login=  async (req,res)=>{
   try{ 
      const {email,password}=req.body;
      const user = await User.findOne({email})
      if(!user){
         res.status(404).send("User Not Found");
      }
      res.status(200).send(user);
   }catch(err){
      res.status(400).send(err.message)
   }
  
 }

 const profile=  async (req,res)=>{
    res.send("User data")
 }

module.exports={register,login,profile,getAllUsers}