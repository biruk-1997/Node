//require('./db/connectedb')
const express = require('express')

const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
const todos = require('./route/todo')

//middleware

app.use(express.json())





//router
app.use('/hello', (req, res)=>{
    res.send('hello world')
})


app.use('/api/v1/todos', todos )



//port = 5000


const PORT = 3000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, 
            console.log(`server is running in ${PORT}...`))  
    } catch (error) {
       console.log(error);
    }
}


start()