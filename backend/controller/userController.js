const User= require('../models/userModel');


//login user
const loginUser = async(req,res)=>{
res.json({mssg: 'LOgin user'})}

//signup user
const signUser = async(req,res)=>{
const {email,password}= req.body
try{
const user = await User.signup(email,password)

}catch(err){

} 


    

module.exports = {loginUser,signUser};



