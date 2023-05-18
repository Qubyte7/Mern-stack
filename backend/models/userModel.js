const bcrypt = require('bcrypt');
const mongoose =require('mongoose');
const validator =require('validator');


const Schema =  mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:[2,'please is beloow the required number of characters'],
        maxlength:[200,'please the password exceeds the maximum of 20 characters']
    }
})

//static signup method
//Note:this was used to reference to the model other wise we would use "User" but because at this time there is no user created we have to use this
// and notice that we will use the normal function not an arro functions

userSchema.statics.signup = async function (email,password) {
   //validTION
   if(!email || !password){
    throw Error('all fields must be filled')
   }
   if(!validator.isEmail(email)){
      throw Error('Email is not valid');
   }
//    if(!validator.isStrongPassword(password)){
//      throw Error("password not strong enough");
//    }
const exist =  await this.findOne({email})//this point or referrs to the model of the user           
    if(exist){
        throw Error('Email already in use')
    }
    
    const salt = await bcrypt.genSalt(10);
    const hash= await bcrypt.hash(password,salt);
    const user= await this.create({email,password:hash})
    return user; 
}

//static login 
userSchema.statics.login= async function(email,password){
    if(!email || !password){
        throw Error('all fields must be filled')
       }
const user = await this.findOne({email});
    if(!user){
        throw Error('Incorrect email');
    }
const match = await bcrypt.compare(password,user.password);
    if(!match){
        throw Error ("incorrect password");
}
return user;
}


module.exports = mongoose.model('User',userSchema);


