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

authRouter.post('/saved',async (req,res) => {
    try {
       const {email} = req.body
       const user = await authModel.findOne({email});
    //    let result = [];
    //    if (user) {
    //     const {savedFiles} = user;
    //     const dir = path.join(__dirname,'../public/uploads')
    //     result = savedFiles.map((filename) => {
    //         const filepath = path.join(dir,filename);
    //         if(fs.existsSync(filepath)) {
    //            return filename;
    //         }
    //      })
    //    }
       if(user) {
        res.status(200).json(user.savedFiles);
       }
       res.status(500).json({"response":"User not found"})
    } catch (e) {
        console.error("Error while fetching saved files",e)
        res.status(500).json({"response":"Error while fetching saved files"})
    }
})

module.exports = authRouter