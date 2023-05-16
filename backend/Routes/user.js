const express =require('express');
//controller function
const {loginUser,signUser} = require('../controller/userController')


const router =express.Router()

//login routes
router.post('/login',loginUser);

//Signup route
router.post('/signup',signUser);


module.exports = router