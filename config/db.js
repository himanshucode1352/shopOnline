import mongoose from "mongoose";
import colors from  "colors";

const connectDb =async()=>{
   try {
      await mongoose.connect( process.env.mongoUrl || 8000).then(console.log('connected'.bgYellow.green));
   } catch (error) {
      console.log(error +"mongodbError".bgRed.white)
   }


}

export default connectDb;