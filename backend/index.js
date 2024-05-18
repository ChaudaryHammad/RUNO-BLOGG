const express = require('express')
const app = express()
const connectDB = require('./database/connection')
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const blog = require('./routes/blogRoutes')
const user = require('./routes/userRoutes')

const cloudinary = require("cloudinary");


app.use(cors(
    {credentials: true,
        origin: 'http://localhost:3000'
        
    }
))

app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));



require('dotenv').config({
    path:'./config/.env'
})




app.get('/',(req,res)=>{
    res.send('Hello World')
})

// routes defined

app.use('/api/v2/blog',blog)
app.use('/api/v2/user',user)
connectDB()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET

})



app.listen(process.env.PORT,()=>{
    try {
        console.log(`Server is running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error);
    }

})