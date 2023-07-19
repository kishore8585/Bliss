const mongoose=require('mongoose')

const genorderSchema=new mongoose.Schema({
    order:{
        type:Array,
        required:true
    },
    orderID:{
        type:String,
        required:true
    },
    invoiceNo:{
        type:String,
        required:true
    },
    paymentmode:{
        type:String,
        required:true
    }
})

const Genorder=mongoose.model('Genorder',genorderSchema)

module.exports=Genorder