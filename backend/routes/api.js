const client = require('../index');
const express = require('express');
const router = express.Router();
const getSubjectNames = require('../models/main')
const {eceModel} = require('../models/files')
const {cseModel} = require('../models/files')
const {cseAimlModel} = require('../models/files')
const {aimlModel} = require('../models/files')
const {aidsModel} = require('../models/files')
const {csgModel} = require('../models/files')
const {itModel} = require('../models/files')
const {eeeModel} = require('../models/files')
const multer = require('multer')
const fs = require('fs')
const cors = require('cors')
const path = require('path')

const app = express();

const storage = multer.diskStorage({
    destination: function(req,res,cb) {
        const semester = `sem${req.body.semester}`  
        let uploadPath = path.join(__dirname, '../public/uploads')
        if(!fs.existsSync(uploadPath)){
            fs.mkdir(uploadPath,{recursive:true});
        }
        cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
        const safeFilename = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_'); 
        cb(null, `${Date.now()}-${safeFilename}`); // Unique file name
    },
})

const upload = multer({storage})

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


router.post('/ece-pdf', upload.single('file'),async (req,res) => {
    const { subjectName, chapters, tags,semester,author } = req.body;
    const filename = req.file.filename;
    try {
        await eceModel.create({
            subjectName:`${subjectName}`,
            semester,
            chapters,
            file:`${filename}`,
            uploadedAt:new Date().toUTCString(),
            author,
            tags:JSON.parse(tags),
        })
        res.status(200).json({message:"Successfully uploaded"})
    } catch (e) {
        console.log("Error while uploading file",e)
    }
})

router.post('/cse-pdf', upload.single('file'),async (req,res) => {
    const { subjectName, chapters,semester, author, tags } = req.body;
    const parsedTags = JSON.parse(tags);
    const filename = req.file.filename;
    try {
        await cseModel.create({
            subjectName:`${subjectName}`,
            semester,
            chapters:`${chapters}`,
            file:`${filename}`,
            uploadedAt:new Date().toISOString(),
            author,
            tags:parsedTags,
        })
        res.status(200).json({message:"Successfully uploaded"})
    } catch (e) {
        console.log("Error while uploading file",e)
    }
})

router.post('/it-pdf', upload.single('file'),async (req,res) => {
    const { subjectName, chapters,semester, author, tags } = req.body;
    const parsedTags = JSON.parse(tags);
    const filename = req.file.filename;
    try {
        await itModel.create({
            subjectName:`${subjectName}`,
            semester,
            chapters:`${chapters}`,
            file:`${filename}`,
            uploadedAt:new Date().toISOString(),
            author,
            tags:parsedTags,
        })
        res.status(200).json({message:"Successfully uploaded"})
    } catch (e) {
        console.log("Error while uploading file",e)
    }
})
router.post('/aiml-pdf', upload.single('file'),async (req,res) => {
    const { subjectName, chapters,semester, author, tags } = req.body;
    const parsedTags = JSON.parse(tags);
    const filename = req.file.filename;
    try {
        await aimlModel.create({
            subjectName:`${subjectName}`,
            semester,
            chapters:`${chapters}`,
            file:`${filename}`,
            uploadedAt:new Date().toISOString(),
            author,
            tags:parsedTags,
        })
        res.status(200).json({message:"Successfully uploaded"})
    } catch (e) {
        console.log("Error while uploading file",e)
    }
})
router.post('/cseAiml-pdf', upload.single('file'),async (req,res) => {
    const { subjectName, chapters,semester, author, tags } = req.body;
    const parsedTags = JSON.parse(tags);
    const filename = req.file.filename;
    try {
        await cseAimlModel.create({
            subjectName:`${subjectName}`,
            semester,
            chapters:`${chapters}`,
            file:`${filename}`,
            uploadedAt:new Date().toISOString(),
            author,
            tags:parsedTags,
        })
        res.status(200).json({message:"Successfully uploaded"})
    } catch (e) {
        console.log("Error while uploading file",e)
    }
})
router.post('/aids-pdf', upload.single('file'),async (req,res) => {
    const { subjectName, chapters,semester, author, tags } = req.body;
    const parsedTags = JSON.parse(tags);
    const filename = req.file.filename;
    try {
        await aidsModel.create({
            subjectName:`${subjectName}`,
            semester,
            chapters:`${chapters}`,
            file:`${filename}`,
            uploadedAt:new Date().toISOString(),
            author,
            tags:parsedTags,
        })
        res.status(200).json({message:"Successfully uploaded"})
    } catch (e) {
        console.log("Error while uploading file",e)
    }
})
router.post('/csg-pdf', upload.single('file'),async (req,res) => {
    const { subjectName, chapters,semester, author, tags } = req.body;
    const parsedTags = JSON.parse(tags);
    const filename = req.file.filename;
    try {
        await csgModel.create({
            subjectName:`${subjectName}`,
            semester,
            chapters:`${chapters}`,
            file:`${filename}`,
            uploadedAt:new Date().toISOString(),
            author,
            tags:parsedTags,
        })
        res.status(200).json({message:"Successfully uploaded"})
    } catch (e) {
        console.log("Error while uploading file",e)
    }
})
router.post('/eee-pdf', upload.single('file'),async (req,res) => {
    const { subjectName, chapters,semester, author, tags } = req.body;
    const parsedTags = JSON.parse(tags);
    const filename = req.file.filename;
    try {
        await eeeModel.create({
            subjectName:`${subjectName}`,
            semester,
            chapters:`${chapters}`,
            file:`${filename}`,
            uploadedAt:new Date().toISOString(),
            author,
            tags:parsedTags,
        })
        res.status(200).json({message:"Successfully uploaded"})
    } catch (e) {
        console.log("Error while uploading file",e)
    }
})

router.get("/hello",async (req,res) => {
   return res.status(200).json({message:"HEllo"})
})

router.get('/getDocs',async (req,res) => {
   const { subject, branch, semester} = req.query;
   const dir = path.join(__dirname,'public/uploads',branch,semester)
   // filter subject objects from db
   const files = fs.readdirSync(dir);
   res.status(200).json({files:files});
})

app.use(cors());

module.exports = router;