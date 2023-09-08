import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: true,
            response: "Product removed from cart",
        });
    } catch (error) {
        next(error);
    }
}