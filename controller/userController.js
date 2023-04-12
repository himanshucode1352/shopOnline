import User from "../models/userModel.js"
import bcrypt from "bcrypt"
  const createUser = async (req,res) =>{
    console.log(req.body)
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

    const login = async(req,res)=>{
    try {
        const{email,password}=req.body;
        const existingUser = await User.findOne({ email: email });
        if (!existingUser) {
          return res.status(404).send({ message: "User not found" });   
        }
    
        const matchedPassword = await bcrypt.compare(
          password,
          existingUser.password
        );
    
        if (!matchedPassword) {
          return res.status(400).json({ message: "Invalid password" });
        }
    
    
    } catch (error) {
        res.status(500).send({msg:error.message});
    }
   
    }
    export  {login,createUser }