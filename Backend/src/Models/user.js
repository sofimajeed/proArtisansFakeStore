
const mongoose = require('mongoose');
const bcrypt  = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
    
})

userSchema.methods.toJSON = function(){
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
}

userSchema.statics.findByCredentials = async (email,password) =>{
    const user = await User.findOne({email})
    if(!user){
        throw new Error('unable to login')
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new Error('unable to login')
    }
    return user;
}

userSchema.pre('save',async function(next){
     const user = this;
     if(user.isModified('password')){
         user.password = await bcrypt.hash(user.password,8)
     }
     next()
})

const User = mongoose.model('user',userSchema )

module.exports = User