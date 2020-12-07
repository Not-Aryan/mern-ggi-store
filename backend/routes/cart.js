import express from 'express';

import Product from '../models/cartModel.js';

const router = express.Router();

router.route('/cart').get((req, res) => {
    let u = req.query.user;
    // console.log(u);
    Product.find( { user: u } )
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/cart').get((req, res) => {
//     Product.find()
//     .then(exercises => res.json(exercises))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/products').post((req, res) => {
    const user = req.body.user;
    const name = req.body.name;
    const price = req.body.price * Number(req.body.quantity);
    const quantity = Number(req.body.quantity);

    // console.log(name);
    // console.log(price);
    // console.log(quantity);

    const newProduct = {
        user,
        name,
        price,
        quantity,
    };

    Product.updateOne({ user: user, name:name }, newProduct, {upsert: true})
        .then(() => res.json('Product added!'))
        .catch(err => { res.status(400).json('Error: ' + console.log(err)) });

});

export default router;