const client = require('../index');
const express = require('express');
const router = express.Router();
const getSubjectNames = require('../models/main')
const styleModel = require('../models/dummy')

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

router.get('/sss',async (req,res) => {
    const data = await getSubjects();
    console.log(data.map((d)  => d.course));
    res.json(data)
})

router.post('/dummy',async (req,res) => {
    const data = [{name:"venkatesh",uploadedAt:new Date()},{name:"harish",uploadedAt:new Date()}]
    await styleModel.insertMany(data);
    console.log("Inserted")
    res.json({"ns":"Successfully inserted"})
})

module.exports = router;