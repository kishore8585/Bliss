const mongoose=require('mongoose')

const productschema= new mongoose.Schema({
    id:{
        type:String
    },
    pname:{
        type:String
    },
    price:{
        type:Number
    },
    color:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})

const product=mongoose.model('Product',productschema)

module.exports=product