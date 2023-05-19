const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const requireAuth = async (req,res,next) =>{
    //verify authentication
    //this (authorization) is accessed from the header which is is typically available when a client includes it in an HTTP request to access a protected resource. 
//this authorization contain the token ,,,,,blueprint of authorization "Beare sdfksidfhsfs.sdfsdfsdfsdf.sfsdhfsdfs" toke = (sdfksidfhsfs.sdfsdfsdfsdf.sfsdhfsdfs)
    const {authorization} = req.headers;
if(!authorization){
    return res.status(401).json({error:'Authorization token required'});
}
const token = authorization.split(' ')[1]; // here we are splitin the authorization by a spce and we want th element at the 2nd position which is our token
try{
const {_id} =  jwt.verify(token,process.env.SECRET)//we are getting the the _id found from the token
 req.user = await User.findOne({_id}).select('_id')//select('_id) ==>will allow us to access or be reutrne only the _id from the user got
//above we are attaching to the rquest the user property so that the following middle ware maybe able to get access to the user we specified .
next();
}catch(error){
console.log(error);
res.status(401).json({error:'Request is not Authorised'})
}
}




module.exports = requireAuth





















