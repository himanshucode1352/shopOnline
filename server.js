import express from "express";
import colors from "colors";
import Dotenv from "dotenv"
import connectDb from "./config/db.js";
import authRoutes from './routes/authRoutes.js'
//env config
Dotenv.config()

const app = express()
//middlewares
app.use(cors)

//connect to database
connectDb();

// port
const   port =  process.env.PORT ||8000
app.listen(port).then(()=>console.log(`app is running at ${port}`));