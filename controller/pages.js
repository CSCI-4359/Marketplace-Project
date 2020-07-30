const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const ct1product = require('../models/ct1');
const ct2product = require('../models/ct2');
const Cart = require('../models/cart');

const router = express.Router();



router.get('/', (req, res) => {
    ct1product.find()
        .then (result => {
            res.render('index', {products: result, pageTitle: 'Homepage'});
        })
        .catch(err => console.log(err));
});

router.post('/add-cart', (req, res) => {
    if (req.body.catId == 'cat1') {
        ct1product.findById(req.body.id)
            .then(result =>{
                var prod = { title: result.title, price: result.price, quantity: result.quantity, img: result.img};
                Cart.collection.insertOne(prod); console.log('Insert is success..');})
                
            .catch(err => console.log(err));
    }
});

router.get('/contact', (req, res) => {
            res.render('contact', {pageTitle: 'Contact'});
    
});

router.get('ct2', (req, res) => {
    ct2product.find()
        .then (result => {
            res.render('index', {products: result, pageTitle: 'Homepage'});
        })
        .catch(err => console.log(err));
});

module.exports = router;