const express = require('express')
const User = require('../Models/user')
const userRouter = new express.Router();

userRouter.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    next();
})


userRouter.get("", (req,res)=>{
    res.send('You are Welcome')
})


//signup route
userRouter.post('/users',async (req,res)=>{
    const user = new User(req.body);
    try{
        await user.save();
        res.status(201).send({user});
    }catch(e){
       res.status(400).send(e);
    }
})

//login route
userRouter.post('/users/login',async (req,res) =>{
    try{
       const user = await User.findByCredentials(req.body.email,req.body.password);
       const token = await user.generateAuthToken();
       res.send({user,token})
    }catch(e){
        res.status(400).send();
    }
})


  module.exports = userRouter;