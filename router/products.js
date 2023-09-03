import { Router } from "express"
import read from "../controllers/products/read.js"
import create from "../controllers/products/create.js";

let productsRouter = Router();

productsRouter.get("/", read); 
productsRouter.post("/", create);

export default productsRouter;