import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import getToken from "../middlewares/getToken.js";
import accountExistsSignIn from "../middlewares/accountSignIn.js";
import signInToken from "../controllers/auth/signInToken.js";
import passport from "../middlewares/passport.js";

let authRouter = Router();

authRouter.post(
  "/signin", // endpoint
  accountExistsSignIn, // verify user exists
  isValidPassword, // compare password
  getToken, // get token user
  signIn // login
);

authRouter.post(
  "/token",
  passport.authenticate("jwt", { session: false }),
  getToken,
  signInToken
);

export default authRouter;
