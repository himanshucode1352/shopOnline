import express from "express";
import colors from "colors";
import Dotenv from "dotenv"
import connectDb from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
//env config
Dotenv.config()

const app = express()
//middlewares
app.use(express.json())

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

//connect to database
connectDb();

app.get('/',()=>{
    console.log('hyyyyyyy')
})


//routes
app.use('/user',authRoutes)

// port
const   port =  process.env.PORT ||8080
app.listen(port,()=>{console.log(`app is running at ${port}`)});