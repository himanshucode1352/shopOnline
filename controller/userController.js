import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
  const createUser = async (req,res) =>{

    try {
      const{name,email,password,address,role,phoneNumber}= req.body;

      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(500).send({ message: "User already exist" });    
      }

        const saltRound = 10;
        const hashed = await bcrypt.hash(password,saltRound);
        const user = await new User({name,email,password:hashed,address,phoneNumber}).save();
     
           const token =  jwt.sign(
           { email: user.email, id: user._id },
            process.env.ACCESS_TOKEN_SECERT
                              );
           res.status(200).send({ token:token, msg:'success' });
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
        const token = jwt.sign(
          { email: existingUser.email, id: existingUser._id },
          process.env.ACCESS_TOKEN_SECERT
        );
        res.status(200).send({
          token: token,
          msg:'login success'
         });
        


    } catch (error) {
        res.status(500).send({msg:error.message});
    }
   
    }
    export  {login,createUser }