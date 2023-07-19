const Cart=require('../Model/cartModel')


module.exports.addcart=async(req,res)=>{
    // console.log(req.body)
    const check=await Cart.find({id:req.body.id})
    if(check.length>0){
        // console.log(check)
        let a = check[0].Quantity
        const upd=await Cart.findOneAndUpdate({id:req.body.id},{Quantity:a+1},{new:true})
        res.status(200).json({
            data:upd
    })
    }
    else{
        const adcart=await Cart.create(req.body)
        res.status(200).json({
            data:adcart
    })
    }
}

module.exports.showcart=async(req,res)=>{
    const show= await Cart.find()
    // console.log(show)
    res.status(200).json(show)
}

module.exports.updatecart=async(req,res)=>{
    console.log(req.body)
    Object.entries(req.body.data).forEach( async([key,value]) => {
        await Cart.findOneAndUpdate({ Pname:key }, {Quantity:value})
    })
    const show= await Cart.find()
    res.status(200).send(show)
}