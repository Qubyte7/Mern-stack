const User= require('../models/userModel');


//login user
const loginUser = async(req,res)=>{
res.json({mssg: 'LOgin user'})}

//signup user
const signUser = async(req,res)=>{
const {email,password}= req.body
try{
const user = await User.signup(email,password)
res.status(200).json({email,user})
}catch(err){
res.status(400).json({error:err.message })
} 

}
    

module.exports = {loginUser,signUser};



