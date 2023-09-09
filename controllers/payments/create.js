import mercadopago from 'mercadopago'

    export default async(req, res) => {
        mercadopago.configure({ access_token: process.env.MPAY_SECKEY })
        let preference = {
            items: req.body.products, //array de productos que se deben pagar
            back_urls : {
                success : process.env.CLIENT_URL + "/payment/success" ,
                failure : process.env.CLIENT_URL + "/payment/failure" ,
                pending : process.env.CLIENT_URL + "/payment/pending"
            },
        };

        let response = await mercadopago.preferences.create(preference)
        return res.status(201).redirect(response.body.init_point);
    }
