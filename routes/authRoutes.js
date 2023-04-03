import express from "express"
import { createUser } from "../controller/userController.js";
const Router = express.Router()

Router.post('/create-user',createUser)
export default Router