const Product=require('../Model/producrtModel')

module.exports.addproduct=async(req,res)=>{
    console.log(req.body)
    const Prod=await Product.create(req.body)
    console.log(Prod)
    res.status(200).json({
        status:"Success",
        data:Prod
    })
}

module.exports.showproduct=async(req,res)=>{
    const showp= await Product.find()
    res.status(200).send(showp)
}

module.exports.deleteproduct=(req,res)=>{
    const { id } = req.params;
    console.log(req.params)
    Product.findByIdAndDelete(req.params.id)
    .then(async(data) => {
      const produ=await Product.find()
      console.log("deleted");
      res.status(201).send(produ);
    })
}

module.exports.description=async(req,res)=>{
    const{id}=req.params;
    console.log(id)
    const data = await Product.findById(id)
    res.status(200).send(data)
}

module.exports.updateproduct=async(req,res)=>{
    const{_id}=req.params
    const{id,pname,price,color,description,image}=req.body
    console.log(id)
    console.log(pname)
    Product.findByIdAndUpdate(_id,{id,pname,price,color,description,image},{new:true})
    .then(async(data) => {
      const produ=await Product.find()
      console.log("updated");
      console.log(produ)
      res.status(200).send(produ);
    })
}