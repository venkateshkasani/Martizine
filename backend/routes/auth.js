const express = require('express')
const authRouter = express.Router();
const mongoose = require('mongoose')
const {authModel} = require('../models/auth')

authRouter.post('/auth',async (req,res) => {
    try {
       const {name, email, picture} = req.body;
       let user = await authModel.findOne({email}).exec();
       if(!user) {
          await authModel.create({
            name,
            email,
            picture,
            role:'user',
            savedFiles:[],
          })
       }
       user = await authModel.findOne({email}).exec();
       res.status(201).json({role:user.role,email:user.email})
    } catch (e) {
        console.error("Error while authenticating",e)
        res.status(500).json({"message":"error while authenticating"});
    }
})

authRouter.get('/saved', async (req, res) => {
  try {
      const { email } = req.query;
      console.log("Incoming query:", req.query);

      if (!email) {
          console.warn("⚠️ No email provided in query");
          return res.status(400).json({ response: "Email is required" });
      }

      const user = await authModel.findOne({ email });
      if (user) {
          return res.status(200).json(user.savedFiles);
      }

      return res.status(404).json({ response: "User not found" });
  } catch (e) {
      console.error("Error while fetching saved files", e);
      res.status(500).json({ response: "Error while fetching saved files" });
  }
});

authRouter.get('/filteredSaved', async (req, res) => {
  try {
      const { email,type,search } = req.query;
      if (!email) {
          console.warn("⚠️ No email provided in query");
          return res.status(400).json({ response: "Email is required" });
      }
      const user = await authModel.findOne({ email });
      if (user) {
        const files = user.savedFiles;
        const filtered = files.filter((obj) => {
          if(type && search != '') {
            return obj.file.includes(search) || obj.type == type;
          } else if (type) {
            return obj.type == type
          } else {
            return obj.file.toLowerCase().includes(search.toLowerCase());
          }
          
        })
          return res.status(200).json(filtered);
      }
      return res.status(404).json({ response: "User not found" });
  } catch (e) {
      console.error("Error while fetching filtered saved files", e);
      res.status(500).json({ response: "Error while fetching filtered saved files" });
  }
});

    authRouter.post('/save-files',async (req,res) => {
        try {
            const {email,obj} = req.body;
            const userData = await authModel.updateOne(
                {
                  email: email,
                  "savedFiles._id": { $ne: obj._id } // makes sure it's not already there
                },
                {
                  $push: {
                    savedFiles: obj
                  }
                }
              );              
        res.status(200).json(userData);
    } catch (e) {
        console.log("error while saving file data in db",e)
        res.status(500).json({"message":"Error while saving data in db"})
    }
})

    authRouter.post('/unsave-files',async (req,res) => {
        try {
            const {email,obj} = req.body;
            const userData = await authModel.updateOne(
                {
                  email: email,
                  "savedFiles._id": obj._id
                },
                {
                  $pull: {
                    savedFiles: {_id:obj._id}
                  }
                }
              );              
        res.status(200).json(userData);
} catch (e) {
    res.status(500).json({"message":"Error while unsaving data in db"})
}})

authRouter.post('/getUserData',async (req,res) => {
     try {
        const {email} = req.body;
        const user = await authModel.findOne({email}).exec();
        res.json(user).status(200);
     } catch (e) {
        console.log("Error while fetching user Data from DB")
     }
})

module.exports = authRouter