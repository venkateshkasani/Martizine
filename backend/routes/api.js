const client = require('../index');
const express = require('express');
const router = express.Router();
const getSubjectNames = require('../models/main')
const subData = require('../dataset/subject')

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


module.exports = router;