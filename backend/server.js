const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
const router=require('./Routes/routes')
app.use(express.json())
app.use(cors())
app.use('/api',router)
mongoose.connect('mongodb://127.0.0.1:27017/Bliss')
        .then(console.log("DB is connected"))
        .catch((error)=>{
            console.log(error)
        })
const PORT=4000;
app.listen(PORT,'127.0.0.1',(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(`The server is listening on the PORT ${PORT}`)
    }
})

