import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connect;