import Cart from "../../models/Cart.js";

export default async function (req, res, next) {
    try {
        let queries = { user_id: req.user._id };
        let all = await Cart.find(queries)
        return res.status(200).json({
            success: true,
            response: all,
        });
    } catch (error) {
        next(next);
    }
}