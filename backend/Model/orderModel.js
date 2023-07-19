const mongoose=require('mongoose')

const orderSchema=new mongoose.Schema({
    orderItems:[{
        type:Object,
        // ref:'Cart',
        required:true
    }],
    email:{
        type:String,
        required:[true,'Enter your email!!']
    },
    country:{
        type:String,
        required:[true,'Enter your Country!!']
    },
    firstname:{
        type:String,
        required:[true,'Please tell your name!!']
    },
    lastname:{
        type:String,
        required:[true,'Please tell your name!!']
    },
    address:{
        type:String,
        required:[true,'Enter your address!!']
    },
    optionalAdd:{
        type:String,
        required:[true,'Enter your address!!']
    },
    city:{
        type:String,
        required:[true,'Enter your city!!']
    },
    state:{
        type:String,
        required:[true,'Enter your state!!']
    },
    zipcode:{
        type:Number,
        required:[true,'Enter your ZIPCODE!!']
    },
    phone:{
        type:Number,
        required:[true,'Enter your Number!!']
    },
    subtotal:{
        type:Number,
        required:[true]
    },
    total:{
        type:Number,
        required:[true]
    }
})

const Order=mongoose.model('Order',orderSchema)

module.exports=Order