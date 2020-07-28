const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const ct1product = require('../models/ct1');
const ct1 = require('../models/ct1');

const router = express.Router();



router.get('/', (req, res) => {
    ct1product.find()
        .then (result => {
            res.render('index', {products: result, pageTitle: 'Homepage'});
        })
        .catch(err => console.log(err));
});

module.exports = router;