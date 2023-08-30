import express from "express";
import "dotenv/config.js";
import cors from "cors";
import morgan from "morgan";
import ecommerceRouter from "./router/ecommerceRouter.js";

// Mongoose
import "./database/mongoose.js";

const serverApp = express(); // SERVER EXPRESS
const PORT = process.env.PORT || 8000; // SET PORT

//Middlewares
serverApp.use(express.json()); // Server Use JSON
serverApp.use(express.urlencoded({ extended: true })); // Query Extended
serverApp.use(cors()); // Cors Other Origins
serverApp.use(morgan("dev")); // Get Http Log

// Router
serverApp.use("/api", ecommerceRouter);

// Server Listen
serverApp.listen(PORT, () => {
  console.log("Server on port:", PORT);
});
