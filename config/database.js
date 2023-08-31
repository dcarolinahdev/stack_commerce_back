import mongoose from "mongoose";
import "dotenv/config";

async function ConnectionMongodb() {
  const db = await mongoose.connect(process.env.MONGODB_URI);
  if (db) {
    console.log("Database is connected");
  }
}

ConnectionMongodb();
