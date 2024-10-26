import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return console.log("Already connected to database");
    }
    await mongoose.connect(
      process.env.MONGODB_URI ? process.env.MONGODB_URI : ""
    );
    console.log("Connected to database");
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
