const mongoose = require('mongoose')

const eceSchema = mongoose.Schema({
    course:String,
    subjectName:String,
    semester:String,
    chapters:String,
    file:String,
    uploadedAt:String,
    tags:[String],
    author:String,
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
    regulation:String,
    tags:[String],
    author:String
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
    regulation:String,
    tags:[String],
    author:String
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
    regulation:String,
    tags:[String],
    author:String
},{
    collection:"aiml-files"
})

const aidsSchema = mongoose.Schema({
    course:String,
    subjectName:String,
    semester:String,
    chapters:String,
    uploadedAt:String,
    file:String,
    regulation:String,
    tags:[String],
    author:String
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
    regulation:String,
    tags:[String],
    author:String
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
    regulation:String,
    tags:[String],
    author:String,
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
    regulation:String,
    tags:[String],
    author:String
},{
    collection:"eee-files"
})

const eceModel = mongoose.model('ece-files',eceSchema)
const cseModel = mongoose.model('cse-files',cseSchema)
const cseAimlModel = mongoose.model('cseAiml-files',cseAimlSchema)
const aidsModel = mongoose.model('aids-files',aidsSchema)
const aimlModel = mongoose.model('aiml-files',aimlSchema)
const csgModel = mongoose.model('csg-files',csgSchema)
const itModel = mongoose.model('it-files',itSchema)
const eeeModel = mongoose.model('eee-files',eeeSchema)

module.exports = { eceModel,cseModel,cseAimlModel,aidsModel,aimlModel,csgModel,itModel,eeeModel }