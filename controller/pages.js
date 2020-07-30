const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const bakingItems = require('../models/bakingItems');


const router = express.Router();

router.get('/', (req, res) => {
    bakingItems.find()
        .then (result => {
            console.log(result);
            res.render('index', {products: result, pageTitle: 'Homepage', pageName: 'Baking Items'});
        })
        .catch(err => console.log(err));
});


router.get('/baking-items', (req, res) => {
    bakingItems.find()
        .then (result => {
            res.render('baking-items', {products: result, pageTitle: 'Baking Items', pageName: 'Home'});
        })
        .catch(err => console.log(err));
});

router.get('/bakingItems/:prodId', (req, res) => {
    backingItems.findById(req.params.prodId)
        .then (result => {
            res.render('product-detail', {prod: result, pageTitle: 'Product Detail', pageName: 'Baking Items'});
        })
        .catch(err => console.log(err));
});

module.exports = router;