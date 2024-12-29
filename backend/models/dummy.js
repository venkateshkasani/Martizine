const mongoose = require('mongoose');

const dummyModel = new mongoose.Schema({
    name: String,
    uploadedAt:Date
},{
    collection:"dummy"
})

const styleModel = mongoose.model('dummy',dummyModel)

module.exports = styleModel;