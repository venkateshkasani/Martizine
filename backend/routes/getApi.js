const express = require('express');
const getRouter = express.Router();
const {eceModel,cseModel,cseAimlModel,aidsModel,aimlModel,csgModel,itModel,eeeModel} = require('../models/files')
const cors = require('cors')
const app = express();
const fs = require('fs')
const path = require('path');

getRouter.get('/get-ece',async (req,res) => {
    try {
        const {subject,type,search} = req.query;
        const filter = {subjectName:subject}
        if(type) {
            filter.type = type;
        } if(search) {
            filter.$or = [
                {
                    tags:{
                        $elemMatch:{
                            $regex:search,
                            $options:'i'
                        }
                    }
                }, {
                    file: {
                        $regex:search,
                        $options:'i'
                    }
                }
            ]
        }
    const dbData = await eceModel.find(filter)
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
    } catch (e) {
        console.log()
    }
})

getRouter.get('/get-cse',async (req,res) => {
    try {
        const {subject,type,search} = req.query;
        const filter = {subjectName:subject}
        if(type) {
            filter.type = type;
        } if(search) {
            filter.$or = [
                {
                    tags:{
                        $elemMatch:{
                            $regex:search,
                            $options:'i'
                        }
                    }
                }, {
                    file: {
                        $regex:search,
                        $options:'i'
                    }
                }
            ]
        }
    const dbData = await cseModel.find(filter)
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
    } catch (e) {
        console.log()
    }
})

getRouter.get('/get-cseAiml',async (req,res) => {
    try {
        const {subject,type,search} = req.query;
        const filter = { subjectName:subject }
        if(type) {
            filter.type = type;
        } if(search) {
            filter.$or = [
                {
                    tags:{
                        $elemMatch:{
                            $regex:search,
                            $options:'i'
                        }
                    }
                }, {
                    file: {
                        $regex:search,
                        $options:'i'
                    }
                }
            ]
        }
    const dbData = await cseAimlModel.find(filter)
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
    } catch (e) {
        console.log()
    }
})

getRouter.get('/get-aids',async (req,res) => {
    try {
        const {subject,type,search} = req.query;
        const filter = {subjectName:subject}
        if(type) {
            filter.type = type;
        } if(search) {
            filter.$or = [
                {
                    tags:{
                        $elemMatch:{
                            $regex:search,
                            $options:'i'
                        }
                    }
                }, {
                    file: {
                        $regex:search,
                        $options:'i'
                    }
                }
            ]
        }
    const dbData = await aidsModel.find(filter)
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
    } catch (e) {
        console.log()
    }
})

getRouter.get('/get-aiml',async (req,res) => {
    try {
        const {subject,type,search} = req.query;
        const filter = {subjectName:subject}
        if(type) {
            filter.type = type;
        } if(search) {
            filter.$or = [
                {
                    tags:{
                        $elemMatch:{
                            $regex:search,
                            $options:'i'
                        }
                    }
                }, {
                    file: {
                        $regex:search,
                        $options:'i'
                    }
                }
            ]
        }
    const dbData = await aimlModel.find(filter)
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
    } catch (e) {
        console.log()
    }
})

getRouter.get('/get-csg',async (req,res) => {
    try {
        const {subject,type,search} = req.query;
        const filter = {subjectName:subject}
        if(type) {
            filter.type = type;
        } if(search) {
            filter.$or = [
                {
                    tags:{
                        $elemMatch:{
                            $regex:search,
                            $options:'i'
                        }
                    }
                }, {
                    file: {
                        $regex:search,
                        $options:'i'
                    }
                }
            ]
        }
    const dbData = await csgModel.find(filter)
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
    } catch (e) {
        console.log()
    }
})

getRouter.get('/get-it',async (req,res) => {
    try {
        const {subject,type,search} = req.query;
        const filter = {subjectName:subject}
        if(type) {
            filter.type = type;
        } if(search) {
            filter.$or = [
                {
                    tags:{
                        $elemMatch:{
                            $regex:search,
                            $options:'i'
                        }
                    }
                }, {
                    file: {
                        $regex:search,
                        $options:'i'
                    }
                }
            ]
        }
    const dbData = await itModel.find(filter)
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
    } catch (e) {
        console.log()
    }
})

getRouter.get('/get-eee',async (req,res) => {
    try {
        const {subject,type,search} = req.query;
        const filter = {subjectName:subject}
        if(type) {
            filter.type = type;
        } if(search) {
            filter.$or = [
                {
                    tags:{
                        $elemMatch:{
                            $regex:search,
                            $options:'i'
                        }
                    }
                }, {
                    file: {
                        $regex:search,
                        $options:'i'
                    }
                }
            ]
        }
    const dbData = await eeeModel.find(filter)
    const dir = path.join(__dirname,'../public/uploads')
    console.log("Subject is",subject)
    const result = dbData.map((dataObj) => {
        const fileDir = path.join(dir,dataObj.file);
        if(fs.existsSync(fileDir)) {
            return dataObj;
        }
    }).filter(Boolean);
    return result ? res.status(200).json(result) : res.status(500).json({Error:"There was an error while searching documents..."});
    } catch (e) {
        console.log()
    }
})

app.use(cors());

module.exports = getRouter;