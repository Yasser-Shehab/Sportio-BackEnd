const mongoose= require("mongoose");
const validators= require("validator")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        validate:{
            validator: validators.isEmail,
            massage:"Invalid email"
        },
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:8
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:"user"
    }
})

module.exports=mongoose.model("User",userSchema)
