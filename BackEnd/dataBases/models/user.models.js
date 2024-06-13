import mongoose, { Schema } from "mongoose";



const schema = new Schema({
username:String,
email:String,
password:String,
age: {
    type: Number,
    min: [10, "min age 10 "],
    max: [50, "max age 50 "],
  },role: {
    type: String,
    enum: ["admin", "user"],
    defaut: "user",
  },
  verifyEmail : {
    type : Boolean,
    default: false,
  }
})


export const userModel = mongoose.model("user",schema)