const express = require('express')
const app = express()
const connectDB = require('./database/connection')
const cors = require('cors')


const blog = require('./routes/blogRoutes')

app.use(express.json())
app.use(cors())


app.use(express.urlencoded({extended:true}))


app.use('/api/v2/blog',blog)

require('dotenv').config({
    path:'./config/.env'
})




app.get('/',(req,res)=>{
    res.send('Hello World')
})

connectDB()



app.listen(process.env.PORT,()=>{
    try {
        console.log(`Server is running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error);
    }

})