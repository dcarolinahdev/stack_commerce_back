import { Router } from "express";
import read from "../controllers/users/read.js";

let userRouter = Router();

userRouter.get("/", read);

export default userRouter;
