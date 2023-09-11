import mercadopago from 'mercadopago'

    export default async(req, res, next) => {
        try {
            mercadopago.configure({ access_token: process.env.MPAY_SECKEY })

            let preference = {
                items: [
                    {
                        title:'Producto 1',
                        quantity:3,
                        currency_id:'COP',
                        unit_price:2500
                    }
                ],
                // items: req.body.products, //array de productos que se deben pagar
                back_urls : {
                    success : process.env.CLIENT_URL + "/payment/success" ,
                    failure : process.env.CLIENT_URL + "/payment/failure" ,
                    pending : process.env.CLIENT_URL + "/payment/pending"
                },
            };

            let response = await mercadopago.preferences.create(preference)
            console.log(response)
            return res.status(201).redirect(response.body.init_point);
        } catch (error) {
            return next(error)
        }
    }
