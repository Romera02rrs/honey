import mongoose from "mongoose";

let isConnected = false; // Variable to check if mongoose is connected

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGO_URL not found");

  if (isConnected) return console.log("Alredy connected to MongoDB!");

  try {
    await mongoose.connect(process.env.MONGODB_URL)

    isConnected = true
    console.log("Connected to MongoDB!");
  } catch (error) {}
};
