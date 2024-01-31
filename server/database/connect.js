import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/login");
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connect;