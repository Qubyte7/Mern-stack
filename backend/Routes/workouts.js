const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
  res.json({msg:"get all workouts"})
})

router.get('/:id',(req,res)=>{
    res.json({msg:"Getting a single workout"})
})

router.post('/',(req,res)=>{
   res.json({msg:"Creating a new workout"})
})
router.delete('/:id',(req,res)=>{
    res.json({msg:"deleting a workou"});
})
router.put('/',(req,res)=>{
    res.json({msg:"Updating the workout"})
})



module.exports = router







