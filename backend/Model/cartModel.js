const mongoose=require('mongoose')


const cartSchema= new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    Pname:{
        type:String,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    }
})

const Cart =mongoose.model('Cart',cartSchema)


module.exports=Cart