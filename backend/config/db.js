import mongoose from "mongoose";
import env from "./envConfig.js";

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(env.MONGO_URL);
    console.log("database connected!!");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export default connectDB;