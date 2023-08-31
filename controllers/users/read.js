import userModel from "../../models/User.js";

async function read(req, res, next) {
  try {
    //req.body.user_id = req.user._id;
    let all = await userModel.find({});

    return res.status(200).json({
      success: true,
      message: "users found",
      response: all,
    });
  } catch (error) {
    next(error);
  }
}

export default read;
