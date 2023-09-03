import mongoose from "mongoose";
import "dotenv/config";

let link = process.env.MONGO_URI;

mongoose
  .connect(link)
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error));