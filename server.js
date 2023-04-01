import express from "express";
import colors from "colors";
import Dotenv from "dotenv"
import connectDb from "./config/db.js";
//env config
Dotenv.config()


//middlewares


//connect to database
connectDb();

// port