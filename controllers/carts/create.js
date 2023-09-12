import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
  try {
    await Cart.create(req.body);
    return res.status(201).json({
      success: true,
      response: "Product added to cart!",
    });
  } catch (error) {
    next(error);
  }
}
