const Genorder=require('../Model/genordModel')
const {createpayorder}=require('./paymentGateway')
var { validatePaymentVerification, validateWebhookSignature } = require('../node_modules/razorpay/dist/utils/razorpay-utils');
module.exports.genorder=async(req,res)=>{
    const{paymentmode,order}=req.body
    
    const total=order[0].total
    console.log(total,paymentmode)
    if(paymentmode=="card"){
        const createorder = await Genorder.create(req.body)
        createpayorder(total).then((order) => {
            // console.log(order)
            res.status(200).json({
                status:"Success",
                data:{
                    genorder:createorder,
                    order_id:order.id
                }
            })
        }).catch(err =>{
             console.log("err")
        })
    }else{
        const createorder = await Genorder.create(req.body)
        // console.log(createorder)
        res.status(200).json({
            status:"Success",
            data:{
                genorder:createorder
            }
    })
}

}

module.exports.showgenord=async(req,res)=>{
    const show= await Genorder.find()
    res.status(200).send(show)
    
}

module.exports.verifypayment=async(req,res)=>{
    const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body
    const verify = validatePaymentVerification({"order_id": razorpay_order_id, "payment_id": razorpay_payment_id }, razorpay_signature, "eJAH0c0ykwUOb8C6PiY7dyy7");
    if(verify){
        res.status(200).send()
    }else{
        res.status(400).send()
    }
    
    
}