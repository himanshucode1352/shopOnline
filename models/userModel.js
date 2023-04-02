import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: "string",
    required: true,
    trim: true,
  },
  role:{
    type:"number",
    default: 0,
  },
  address:{
    type:"string",
    required: true,
    trim: true,
  },
  phoneNumber:{
    type:"string",
    required: true,
    trim: true,
  },

});

export default mongoose.model("User", userSchema);