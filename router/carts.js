import { Router } from "express";
import create from "../controllers/carts/create.js";
import read from '../controllers/carts/read.js'
import update from '../controllers/carts/update.js'
import destroy from '../controllers/carts/destroy.js'

let cartRouter = Router();

cartsRouter.get('/:id', read);
cartsRouter.post('/', create);
cartsRouter.put('/', update);
cartsRouter.delete('/', destroy);

export default cartRouter;