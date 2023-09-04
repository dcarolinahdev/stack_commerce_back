import Product from "../../models/Product.js";

export default async ( req,res,next ) => {
    try {
        let one = await Product.findByIdAndDelete( req.params.id )
        if ( one ) {
            return res.status(204).json({
                succes: true,
                response: one,
                message: "Product deleted"
            })
        }
        return res.status(404).json({
            succes: false,
            response: null,
            message: "Product not deleted"
        }) 
    } catch (error) {
        next(error)
    }
}