const mongoose = require('mongoose')

const eceSchema = mongoose.Schema({
    course:String,
    subjectName:String,
    semester:String,
    chapters:String,
    file:String,
    uploadedAt:String,
    regulation:String
},{
    collection:"ece-files"
})

const cseSchema = mongoose.Schema({
    course:String,
    subjectName:String,
    semester:String,
    chapters:String,
    file:String,
    uploadedAt:String,
    regulation:String
},{
    collection:"cse-files"
})

const cseAimlSchema = mongoose.Schema({
    course:String,
    subjectName:String,
    semester:String,
    chapters:String,
    file:String,
    uploadedAt:String,
    regulation:String
},{
    collection:"cseAiml-files"
})

const aimlSchema = mongoose.Schema({
    course:String,
    subjectName:String,
    semester:String,
    chapters:String,
    file:String,
    uploadedAt:String,
    regulation:String
},{
    collection:"aiml-files"
})

const aidsSchema = mongoose.Schema({
    course:String,
    subjectName:String,
    semester:String,
    chapters:String,
    file:String,
    uploadedAt:String,
    regulation:String
},{
    collection:"aids-files"
})

const csgSchema = mongoose.Schema({
    course:String,
    subjectName:String,
    semester:String,
    chapters:String,
    file:String,
    uploadedAt:String,
    regulation:String
},{
    collection:"csg-files"
})

const itSchema = mongoose.Schema({
    course:String,
    subjectName:String,
    semester:String,
    chapters:String,
    file:String,
    uploadedAt:String,
    regulation:String
},{
    collection:"it-files"
})

const eeeSchema = mongoose.Schema({
    course:String,
    subjectName:String,
    semester:String,
    chapters:String,
    file:String,
    uploadedAt:String,
    regulation:String
},{
    collection:"eee-files"
})

const eceModel = mongoose.model('ece-files',eceSchema)
const cseModel = mongoose.model('cse-files',cseSchema)
const cseAimlModel = mongoose.model('cseAiml-files',cseSchema)
const aidsModel = mongoose.model('aids-files',cseSchema)
const aimlModel = mongoose.model('aiml-files',cseSchema)
const csgModel = mongoose.model('csg-files',cseSchema)
const itModel = mongoose.model('it-files',cseSchema)
const eeeModel = mongoose.model('eee-files',cseSchema)

module.exports = {eceModel,cseModel,cseAimlModel,aidsModel,aimlModel,csgModel,itModel,eeeModel}