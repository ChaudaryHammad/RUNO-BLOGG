const express = require('express')
const app = express()
const connectDB = require('./database/connection')
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const blog = require('./routes/blogRoutes')
const user = require('./routes/userRoutes')
const otp = require('./routes/otpRoutes');
// const mail = require('./routes/mailRoutes');

app.use(express.json())
app.use(cors(
    {credentials: true,
        origin: 'http://localhost:3000'
        
    }
))
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.urlencoded({extended:true}))




require('dotenv').config({
    path:'./config/.env'
})




app.get('/',(req,res)=>{
    res.send('Hello World')
})

// routes defined

app.use('/api/v2/blog',blog)
app.use('/api/v2/user',user)

app.use('/api/v2/otp',otp)
// app.use('/api/v2/sendmail',mail)

connectDB()



app.listen(process.env.PORT,()=>{
    try {
        console.log(`Server is running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error);
    }

})