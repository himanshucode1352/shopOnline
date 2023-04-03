import User from "../models/userModel.js"
import bcrypt from "bcrypt"
 export const createUser = async (req,res) =>{
    try {
        const saltRound = 10;
        const{name,email,password,address,role,phoneNumber}= req.body;
        const hashed = await bcrypt.hash(password,saltRound);
        const user = await new User({name,email,password:hashed,address,phoneNumber}).save();
           res.status(200).send({
            user: user,
            msg:'success'
           });
    } catch (error) {
        res.status(500).send({msg:error.message});
    }
    }