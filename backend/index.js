const mongoose =  require('mongoose');
const express = require('express');
const router = require('./routes/api')
const cors = require('cors')
const getRouter  = require('./routes/getApi')
const authRouter = require('./routes/auth')



const app = express();
app.use(express.json())
const allowedOrigins = ['http://localhost:3000','https://martizine.onrender.com'];
app.use(
    cors({
        origin: function (origin, callback) {
          if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS'));
          }
        },
        credentials: true, // Allow cookies
      })
)
app.use("/public", express.static(__dirname + "/public"));
const port = 8000;
mongoose.connect('mongodb+srv://venkatesh:Lamborghini@martizine.rzm9w.mongodb.net/subjects_files?retryWrites=true&w=majority&appName=Martizine')
app.listen(port,() => console.log("Server running on port:",port))
app.use('/api',router)
app.use('/api',getRouter)
app.use('/api',authRouter)
console.log("connected success!! Enjoy pandago")
