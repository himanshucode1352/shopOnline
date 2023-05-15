import express from "express"
import { createUser, login } from "../controller/userController.js";
import validateToken from "../middlleware/verifyToken.js";
const Router = express.Router()

Router.post('/create',createUser)
Router.post('/login',login)

// Router.post('/login',validateToken,login)
export default Router