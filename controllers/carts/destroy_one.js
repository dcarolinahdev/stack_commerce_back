import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
  try {
    let del = await Cart.findByIdAndDelete(req.params.id);

    if (del) {
      return res.status(200).json({
        success: true,
        response: "Product removed from cart",
      });
    } else {
      return res.status(404).json({
        success: false,
        response: "Product is not removed from cart",
      });
    }
  } catch (error) {
    next(error);
  }
}
