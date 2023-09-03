import { Router } from "express";
import create from "../controllers/users/create.js";
import read from "../controllers/users/read.js";
import read_one from "../controllers/users/read_one.js";
import update from "../controllers/users/update.js";
import deleted from "../controllers/users/delete.js";
import createHash from "../middlewares/createHash.js";

let usersRouter = Router();

usersRouter.post("/", createHash, create); // create user
usersRouter.get("/", read); // get users
usersRouter.get("/:id", read_one); // get one user
usersRouter.put("/:id", update); // update user
usersRouter.delete("/:id", deleted); // delete user

export default usersRouter;