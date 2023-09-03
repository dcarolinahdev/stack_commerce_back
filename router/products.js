import { Router } from "express"
import read from "../controllers/products/read.js"

let productsRouter = Router();

productsRouter.use("/", read); 

export default productsRouter;