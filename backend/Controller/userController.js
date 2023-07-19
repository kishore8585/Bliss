const User=require('../Model/userModel')

module.exports.signup=async(req,res,next)=>{
    console.log(req.body)
    const newUser=await User.create(req.body)
    console.log(newUser)
    res.status(201).json({
        status:"success",
        data:{
            user:newUser    
        }
    })
}

module.exports.login=async(req,res)=>{
    const userLogin=await User.find({email:req.body.email})
   if(userLogin.length==0){
    res.status(200).send("User Not Found")
   }
   else{
    if(userLogin[0].password===req.body.password){
        res.status(200).send("Login Successfull")
    }
    else{
        res.send("Password incorrect")
    }
    console.log(userLogin)
}
}
