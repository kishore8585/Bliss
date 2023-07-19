const express=require('express')
const {signup,login}=require('../Controller/userController')
const {addproduct, showproduct, deleteproduct, description, updateproduct}=require('../Controller/productController')
const { addcart, showcart, updatecart } = require('../Controller/cartController')
const { createorder, showorder } = require('../Controller/orderController')
const { genorder, showgenord, verifypayment} = require('../Controller/generateController')
const router=express.Router()

router.post('/signup',signup)
router.post('/login',login)

router.get('/showproduct',showproduct)
router.post('/addproduct',addproduct)
router.delete('/deleteproduct/:id',deleteproduct)
router.get('/description/:id',description)
router.put('/updateproduct/:_id',updateproduct)

router.post('/addcart',addcart)
router.get('/showcart',showcart)
router.put('/updatecart',updatecart)

router.post('/createorder',createorder)
router.get('/showorder',showorder)

router.post('/genorder',genorder)
router.get('/showgenorder',showgenord)
router.post('/payment/verify',verifypayment)
// router.post('/createpayorder',createpayorder)
module.exports=router

