import { Router } from "express";
import create from "../controllers/carts/create.js";
import read from '../controllers/carts/read.js'
import update from '../controllers/carts/update.js'

let cartRouter = Router();

cartsRouter.get('/:id', read);
cartsRouter.post('/', create);
cartsRouter.put('/', update);

export default cartRouter;