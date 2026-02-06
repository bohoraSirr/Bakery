import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb is connnected");
  } catch (error) {
    console.error("MongoDb connection failed", error);
    process.exit(1);
  }
};
