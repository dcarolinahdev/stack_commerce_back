import { Router } from "express";
import read from '../controllers/carts/read.js'
import create from "../controllers/carts/create.js";

let cartRouter = Router();

cartsRouter.get('/:id', read);
cartsRouter.post('/', create);

export default cartRouter;