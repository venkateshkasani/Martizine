const express = require('express')
const authRouter = express.Router();
const mongoose = require('mongoose')
const authModel = require('../models/auth')

authRouter.post('/auth',async (req,res) => {
    try {
       const {name, email, picture} = req.body;
    //    const user = await authModel.find({email});
    //    if(!user) {
    //       await authModel.create({
    //         name,
    //         email,
    //         picture,
    //         role:'admin',
    //         savedFiles:[],
    //       })
    //    }
       res.status(201).json({"message":"authentication success"})
    } catch (e) {
        console.error("Error while authenticating",e)
        res.status(500).json;
    }
})

authRouter.post('/saved',async (req,res) =>{
    try {
       const {email} = req.body
       const user = await authModel.find({email});
       if (user) {
         res.status(201).json(user);
       } 
    } catch (e) {
        console.error("Error while fetching saved files",e)
    }
})

module.exports = authRouter