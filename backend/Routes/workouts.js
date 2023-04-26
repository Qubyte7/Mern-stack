const express = require('express')
const router = express.Router()
const workoutController = require('../controller/workoutController')

router.get('/',workoutController.getAllWorkouts)
router.get('/:id',workoutController.getSingleWorkout)
router.post('/',workoutController.createWorkout)
router.delete('/:id',workoutController.deleteWorkout)
router.put('/:id',workoutController.updateWorkout)



module.exports = router







