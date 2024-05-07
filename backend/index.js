const express = require('express')
const app = express()
const connectDB = require('./database/connection')
const cors = require('cors')
const bodyParser = require('body-parser');

const blog = require('./routes/blogRoutes')
const user = require('./routes/userRoutes')
app.use(express.json())
app.use(cors())
app.use(bodyParser.json());

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

connectDB()



app.listen(process.env.PORT,()=>{
    try {
        console.log(`Server is running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error);
    }

})