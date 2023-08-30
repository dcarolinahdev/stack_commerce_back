import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/home", (req, res) => {
  res.send("Test Router is Ok");
});

export default indexRouter;