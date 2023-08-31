import { Router } from "express";
import userRouter from "./users.js";

const indexRouter = Router();

indexRouter.get("/home", (req, res) => {
  res.send("Test Router is Ok");
});

indexRouter.use("/users", userRouter);

export default indexRouter;
