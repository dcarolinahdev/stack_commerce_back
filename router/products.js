import { Router } from "express"
import read from "../controllers/products/read.js"
import create from "../controllers/products/create.js";
import read_one from "../controllers/products/read_one.js";

let productsRouter = Router();

productsRouter.get("/", read); 
productsRouter.post("/", create);
productsRouter.get("/:id", read_one);

export default productsRouter;