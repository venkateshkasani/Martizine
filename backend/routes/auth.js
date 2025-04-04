const express = require('express')
const authRouter = express.Router();
const mongoose = require('mongoose')
const {authModel} = require('../models/auth')

authRouter.post('/auth',async (req,res) => {
    try {
       const {name, email, picture} = req.body;
       const user = await authModel.findOne({email}).exec();
       if(!user) {
          await authModel.create({
            name,
            email,
            picture,
            role:'user',
            savedFiles:[],
          })
       }
       res.status(201).json({"message":"authentication success"})
    } catch (e) {
        console.error("Error while authenticating",e)
        res.status(500).json({"message":"error while authenticating"});
    }
})

//get saved files

authRouter.post('/saved',async (req,res) => {
    try {
        console.log("Called saved")
       const {email} = req.body
       const user = await authModel.findOne({email});
       if(user) {
        console.log("user exists",user)
        return res.status(200).json(user.savedFiles);
       }
       console.log("user doesnt exist")
       return res.status(500).json({"response":"User not found"})
    } catch (e) {
        console.error("Error while fetching saved files",e)
        res.status(500).json({"response":"Error while fetching saved files"})
    }
})

    authRouter.post('/save-files',async (req,res) => {
        try {
            const {email,_id} = req.body;
            const userData = await authModel.findOneAndUpdate({email},
                { $addToSet: { savedFiles: _id } },
                {new:true});
        res.status(200).json(userData);
    } catch (e) {
        res.status(500).json({"message":"Error while saving data in db"})
    }
})

    authRouter.post('/unsave-files',async (req,res) => {
    try {
        const {email,_id} = req.body;
        const userData = await authModel.findOneAndUpdate({email},
            { $pull: { savedFiles: _id } },
            {new:true});
    res.status(200).json(userData);
} catch (e) {
    res.status(500).json({"message":"Error while unsaving data in db"})
}
})

module.exports = authRouter