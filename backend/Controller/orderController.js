const Order=require('../Model/orderModel')

module.exports.createorder=async(req,res)=>{
    console.log(req.body)
    const create=await Order.create(req.body)
    res.status(200).json({
        status:"Success",
        data:create
    })
}

module.exports.showorder=async(req,res)=>{
    const show=await Order.find()
    console.log("kwmfwm",show)
    res.status(200).send(show)
}