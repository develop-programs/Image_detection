import mongoose from "mongoose";

export async function ConnectToDatabase() {
  if (!process.env.MONGO_URI) {
    throw new Error("mongodb connection string is not present");
  }
  if (
    mongoose.connections[0].readyState == mongoose.ConnectionStates.connected
  ) {
    console.log("Database is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Database connected successfully 🚀");
  } catch (error) {
    throw new Error("Database connection failed: " + error);
  }
}
