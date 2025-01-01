const client = require('../index');
const express = require('express');
const router = express.Router();
const getSubjectNames = require('../models/main')
const eceModel = require('../models/files')
const cseModel = require('../models/files')
const cseAimlModel = require('../models/files')
const aimlModel = require('../models/files')
const aidsModel = require('../models/files')
const csgModel = require('../models/files')
const itModel = require('../models/files')
const eeeModel = require('../models/files')

// core functions

async function getSubjects() {
    try {
        if(!client) console.log("mongo client is not connected")
        else {
            const data = getSubjectNames.find();
            console.log("data that i got",typeof data);
            return data;
            }
    } catch (e) {
        console.error("Error fetching subject details",e)
    }
}

async function getSemestersByCourse (courseName) {
   try {
     if(!client) console.log("client not connected")
     else {
        const query = {courseName:courseName}
    }
   } catch (e) {
    console.log("Error while fetching data")
   }
}

// router Apis

router.get('/streams',async (req,res) => {
    const data = await getSubjects();
    console.log(data.map((d)  => d.course));
    res.json(data)
})

router.post('/ece-files',async (req,res) => {
    try {
        const title = req.body.title;
        const file = req.file.filename;
        const res = await eceModel.insert({
            subjectName:'test',
            uploadedAt:new Date(),
            regulation:'r20',
            file:'this is a test'
        })
        return res.json({"message":"File uploaded succesfully"});
    } catch (e) {
        throw new Error("Error while uploading files to the server")
    }
})


module.exports = router;