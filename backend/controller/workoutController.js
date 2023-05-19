const workoutModel = require("../models/workoutModel");
const mongoose = require("mongoose");

//get all workouts
const getAllWorkouts = async (req, res) => {
  const user_id = req.user._id
  const workouts = await workoutModel.find({user_id }).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  //before any thing we are gonna check id the given id in valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NO such workout" });
  }
  const workout = await workoutModel.findById(id);
  if (!workout) {
    return res
      .status(404)
      .json({ error: "The workout you are trying to get is not Available" });
  }
  res.status(200).json(workout);
};

// create a workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  let emptyFields = [];
 
  if (!title) {
    emptyFields.push("title");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please in all the fields", emptyFields });
  }
  try {
    const user_id = req.user._id;//before we perform this functionality we get the user with the id property through the request provided by the middleware we created 
    const workout = await workoutModel.create({ title, load, reps ,user_id});
    res.status(200).json(workout);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NO such Workout" });
  }
  const workout = await workoutModel.findOneAndDelete({ _id: id });

  if (!workout) {
    return res
      .status(404)
      .json({ error: "The Workout you are trying to delete is not available" });
  }
  res.status(200).json(workout);
};

//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "NO such Workout" });
  }
  const workout = await workoutModel.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );
  if (!workout) {
    return res
      .status(404)
      .json({ error: "The Workout you are trying to delete is not available" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
};
