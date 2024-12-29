const mongoose =  require('mongoose');
const express = require('express');
const apis = require('./routes/api')
const router = require('./routes/api')

const app = express();
app.use(express.json())
const port = 8000;
mongoose.connect('mongodb+srv://venkatesh:Lamborghini@martizine.rzm9w.mongodb.net/subjects_files?retryWrites=true&w=majority&appName=Martizine')
app.listen(port,() => console.log("Server running on port:",port))
app.use('/api',router)
console.log("connected success!! Enjoy pandago")
