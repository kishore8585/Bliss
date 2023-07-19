const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,'Please tell your name!!']
    },
    lastname:{
        type:String,
        required:[true,'Please tell your name!!']
    },
    email:{
        type:String,
        required:[true,'Provide your email!!'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Provide your password!!']
    },
})

const User=mongoose.model('User',userSchema);

module.exports=User