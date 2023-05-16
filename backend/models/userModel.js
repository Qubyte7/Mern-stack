const bcrypt = require('bcrypt');
const mongoose =require('mongoose');


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
    }
})
//static signup method
//Note:this was used to reference to the model other wise we would use "User" but because at this time there is no user created we have to use this
// and notice that we will use the normal function not an arro function
userSchema.statics.signup = async function (email,password) {
        const exist =  await this.findOne({email})//this point or referrs to the model of the user           
        if(exist){
            throw Error('Email already in use')
    }
    
    const salt = await bcrypt.genSalt(10);
    const hash= await bcrypt.hash(password,salt);
        
    const user= await this.create({email,password:hash})
    return user; 
}

module.exports = mongoose.model('User',userSchema);



