const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
    name:String,
    email:String,
    picture:String,
    role:String,
    savedFiles:[mongoose.Schema.Types.Mixed]
},{
    collection:"auth"
})

const authModel = mongoose.model('authModel',authSchema)

module.exports = { authModel }