import Product from "../../models/Product.js"

export default async ( req,res,next ) => {
    try {
        let one = await Product.findById( req.params.id, )
        if ( one ) {
            return res.status(200).json({
                succes: true,
                response: one,
                message: "Product found!"
            })
        }
        return res.status(404).json({
            succes: false,
            response: null,
            message: "Product not found!"
        })     
    } catch (error) {
        next(error)
    }
}