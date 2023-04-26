const express = require('express')
const router = express.Router()
const WorkoutModel = require('../models/workoutModel')

router.get('/',(req,res)=>{
  res.json({msg:"get all workouts"})
})

router.get('/:id',(req,res)=>{
    res.json({msg:"Getting a single workout"})
})

router.post('/',async(req,res)=>{
    const {title,reps,load} = req.body
    try{
        const workout=await WorkoutModel.create()
    }
    catch(error){}
   res.json({msg:"Creating a new workout"})
})


router.delete('/:id',(req,res)=>{
    res.json({msg:"deleting a workou"});
})
router.put('/',(req,res)=>{
    res.json({msg:"Updating the workout"})
})



module.exports = router







