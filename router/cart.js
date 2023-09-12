import { Router } from "express";
import create from "../controllers/carts/create.js";
import read from "../controllers/carts/read.js";
import update from "../controllers/carts/update.js";
import destroy_one from "../controllers/carts/destroy_one.js";
import isValidStock from "../middlewares/isValidStock.js";
import destroy from "../controllers/carts/destroy.js";
import inventary from "../middlewares/inventary.js";

let cartRouter = Router();

cartRouter.get("/", read);
cartRouter.post("/", inventary, create);
cartRouter.put("/:id", isValidStock, update);
cartRouter.delete("/", destroy);
cartRouter.delete("/:id", destroy_one);

export default cartRouter;
