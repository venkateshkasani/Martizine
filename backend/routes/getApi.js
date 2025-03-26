const express = require('express');
const getRouter = express.Router();
const {eceModel,cseModel,cseAimlModel,aidsModel,aimlModel,csgModel,itModel,eeeModel} = require('../models/files')
const cors = require('cors')
const app = express();
const fs = require('fs')
const path = require('path');

getRouter.get('/get-ece',async (req,res) => {
    const {subject} = req.query;
    const dbData = await eceModel.find({subjectName:subject})
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    let ans;
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
})

getRouter.get('/get-cse',async (req,res) => {
    const {subject} = req.query;
    const dbData = await cseModel.find({subjectName:subject})
    const dir = path.join(__dirname,'../public/uploads')
    let ans;
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
})
getRouter.get('/get-cseAiml',async (req,res) => {
    const {subject} = req.query;
    const dbData = await cseAimlModel.find({subjectName:subject})
    const dir = path.join(__dirname,'../public/uploads')
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
})
getRouter.get('/get-aids',async (req,res) => {
    const {subject} = req.query;
    const dbData = await aidsModel.find({subjectName:subject})
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
})
getRouter.get('/get-aiml',async (req,res) => {
    const {subject} = req.query;
    const dbData = await aimlModel.find({subjectName:subject})
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
})
getRouter.get('/get-csg',async (req,res) => {
    const {subject} = req.query;
    const dbData = await csgModel.find({subjectName:subject})
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
})
getRouter.get('/get-it',async (req,res) => {
    const {subject} = req.query;
    const dbData = await itModel.find({subjectName:subject})
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
})
getRouter.get('/get-eee',async (req,res) => {
    const {subject} = req.query;
    const dbData = await eeeModel.find({subjectName:subject})
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
})

app.use(cors());

module.exports = getRouter;