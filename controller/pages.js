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
            res.render('index', {products: result, pageTitle: 'Fresh Produce', pageName: 'Fresh Produce'});
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

router.get('/ct2', (req, res) => {
    ct2product.find()
        .then (result => {
            res.render('ct2', {products: result, pageTitle: 'Cereal', pageName: 'Cereal'});
        })
        .catch(err => console.log(err));
});

router.get('/ct3', (req, res) => {
    ct3product.find()
        .then (result => {
            res.render('ct3', {products: result, pageTitle: 'Dairy', pageName: 'Dairy'});
        })
        .catch(err => console.log(err));
});

router.get('/ct4', (req, res) => {
    ct4product.find()
        .then (result => {
            res.render('ct4', {products: result, pageTitle: 'Everyday Items', pageName: 'Everyday Items'});
        })
        .catch(err => console.log(err));
});

router.get('/ct5', (req, res) => {
    ct5product.find()
        .then (result => {
            res.render('ct5', {products: result, pageTitle: 'Breakfast Items', pageName: 'Breakfast Items'});
        })
        .catch(err => console.log(err));
});

router.get('/ct6', (req, res) => {
    ct6product.find()
        .then (result => {
            res.render('ct6', {products: result, pageTitle: 'Baking Items', pageName: 'Baking Items'});
        })
        .catch(err => console.log(err));
});

router.get('/ct1/:prodId', (req, res) => {
    ct1product.findById(req.params.prodId)
        .then (result => {
            res.render('product-detail1', {prod: result, pageTitle: 'Items Detail', pageName: 'Fresh Produce'});
        })
        .catch(err => console.log(err));
});

router.get('/ct2/:prodId', (req, res) => {
    ct2product.findById(req.params.prodId)
        .then (result => {
            res.render('product-detail2', {prod: result, pageTitle: 'Items Detail', pageName: 'Cereal'});
        })
        .catch(err => console.log(err));
});

router.get('/ct3/:prodId', (req, res) => {
    ct3product.findById(req.params.prodId)
        .then (result => {
            res.render('product-detail3', {prod: result, pageTitle: 'Items Detail', pageName: 'Dairy'});
        })
        .catch(err => console.log(err));
});

router.get('/ct4/:prodId', (req, res) => {
    ct4product.findById(req.params.prodId)
        .then (result => {
            res.render('product-detail4', {prod: result, pageTitle: 'Items Detail', pageName: 'Everyday Items'});
        })
        .catch(err => console.log(err));
});

router.get('/ct5/:prodId', (req, res) => {
    ct5product.findById(req.params.prodId)
        .then (result => {
            res.render('product-detail5', {prod: result, pageTitle: 'Items Detail', pageName: 'Breakfast Items'});
        })
        .catch(err => console.log(err));
});

router.get('/ct6/:prodId', (req, res) => {
    ct6product.findById(req.params.prodId)
        .then (result => {
            res.render('product-detail6', {prod: result, pageTitle: 'Items Detail', pageName: 'Baking Items'});
        })
        .catch(err => console.log(err));
});

module.exports = router;