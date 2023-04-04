import express from "express";
import colors from "colors";
import Dotenv from "dotenv"
import connectDb from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
//env config
Dotenv.config()

const app = express()
//middlewares
app.use(express.json())

//connect to database
connectDb();

app.get('/',()=>{
    console.log('hyyyyyyy')
})


//routes
app.use('/user',authRoutes)

// port
const   port =  process.env.PORT ||8000
app.listen(port,()=>{console.log(`app is running at ${port}`)});