const express= require('express');
const dotenv =require('dotenv').config()
const app = express()
const Port = process.env.PORT


app.listen(Port,()=>{
    console.log(`App running on Port ${Port}`)
})


