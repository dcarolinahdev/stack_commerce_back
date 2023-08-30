import { Router } from "express";

const ecommerceRouter = Router();

ecommerceRouter.get("/home", (req, res) => {
  res.send("Test Router is Ok");
});

export default ecommerceRouter;
