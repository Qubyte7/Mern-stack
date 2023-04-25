const express= require('express');
const dotenv =require('dotenv').config()
const app = express()
const Port = process.env.PORT
const workoutRoutes = require('./Routes/workouts')


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
    app.use(express.json())//see if any request coming have a body and if it does it passes it to the request Body so we can access it by a request handeler 
app.use('/api/workouts',workoutRoutes)
//routes


app.listen(Port,()=>{
    console.log(`App running on Port ${Port}`)
})

