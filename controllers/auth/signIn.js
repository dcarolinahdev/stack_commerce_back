import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user._id);
    return res.status(200).json({
      response: { token: req.token, user: req.user },
      message: "User signIn",
    });
  } catch (error) {
    next(error);
  }
};
