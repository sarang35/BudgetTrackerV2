import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try{
    const mongooseInstances = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log("Connected to database")
  }
  catch(err){
    console.log("error connecting to database", err)
    process.exit(1);
  }
};

export { connectDB };


