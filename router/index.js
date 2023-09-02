import { Router } from "express";
import userRouter from "./users.js";
import authRouter from "./auth.js";

const indexRouter = Router();

indexRouter.get("/home", (req, res) => {
  res.send("Test Router is Ok");
});

indexRouter.use("/users", userRouter);
indexRouter.use("/auth", authRouter);

export default indexRouter;
