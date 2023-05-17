const User= require('../models/userModel');
const jwt = require('jsonwebtoken');


const createToken = (_id) =>{
return  jwt.sign({_id},process.env.SECRET)//_id means _id: _id

}

//login user
const loginUser = async(req,res)=>{
res.json({mssg: 'LOgin user'})}

//signup user
const signUser = async(req,res)=>{
const {email,password}= req.body
try{
const user = await User.signup(email,password);
const token = createToken(user._id)


res.status(200).json({email, token})
}catch(err){
res.status(400).json({error:err.message })
} 

}
    

module.exports = {loginUser,signUser};



