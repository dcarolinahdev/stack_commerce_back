import mercadopago from 'mercadopago'

mercadopago.configure(
    { access_token: 'MPAY_SECKEY' });
    let preference = {
        items: [
            { title:'Test',quantity:3,currency_id:'COP',unit_price:5}
        ]
    };
mercadopago.preferences.create(preference)
