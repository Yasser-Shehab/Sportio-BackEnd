
const getAllUsers =  async (req,res)=>{
   res.send("All users")
}
const register=  async (req,res)=>{
    res.send("Register")
 }

 
const login=  async (req,res)=>{
    res.send("you are login")
 }

 const profile=  async (req,res)=>{
    res.send("User data")
 }

module.exports={register,login,profile,getAllUsers}