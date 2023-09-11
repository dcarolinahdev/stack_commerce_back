import { Router } from "express";
import create from "../controllers/carts/create.js";
import read from '../controllers/carts/read.js'
import update from '../controllers/carts/update.js'
import destroy from '../controllers/carts/destroy.js'

let cartRouter = Router();

cartRouter.get('/:id', read);
cartRouter.post('/', create);
cartRouter.put('/', update);
cartRouter.delete('/', destroy);

export default cartRouter;