const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const ct1product = require('../models/ct1');
const ct2product = require('../models/ct2');
const ct3product = require('../models/ct3');
const ct4product = require('../models/ct4');
const ct5product = require('../models/ct5');
const ct6product = require('../models/ct6');
const Cart = require('../models/cart');
const WishList = require('../models/wish-list');

const router = express.Router();



router.get('/', (req, res) => { // homepage display 
    ct1product.find()
        .then (result => {
            res.render('index', {products: result, pageTitle: 'Fresh Produce', pageName: 'Fresh Produce'});
        })
        .catch(err => console.log(err));
});

router.post('/add-cart', (req, res) => { // inserting items from cart 
    const itemId = req.body.id;
    if (req.body.catId == 'cat1') {
        ct1product.findById(itemId)
            .then(result => { insertIntoCart(result, itemId); })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat2') {
        ct2product.findById(itemId)
            .then(result => { insertIntoCart(result, itemId); })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat3') {
        ct3product.findById(itemId)
            .then(result => { insertIntoCart(result, itemId); })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat4') {
        ct4product.findById(itemId)
            .then(result => { insertIntoCart(result, itemId); })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat5') {
        ct5product.findById(itemId)
            .then(result => { insertIntoCart(result, itemId); })
            .catch(err => console.log(err));
    } else {
        ct6product.findById(itemId)
            .then(result => { insertIntoCart(result, itemId); })
            .catch(err => console.log(err));
    }
});

function insertIntoCart(result, itemId) {
    Cart.findOneAndUpdate( {itemId: itemId}, { $inc: {quantity: 1}}, function(err, doc) { if(err) {console.log(err);}
    console.log(doc);
    if (doc == null) {
        var prod = { itemId:itemId, title: result.title, price: result.price, quantity: 1, img: result.img};
        Cart.collection.insertOne(prod); console.log('Insert to cart is success..');
    }
    });
}

router.delete('/:id', (req, res) => {
    Cart.findByIdAndDelete(req.params.id, function(err, doc) { if(err) {console.log(err); } });
    Cart.find()
        .then (result => {
            res.render('cart', {product: result, pageTitle: 'cart', pageName: 'Cart', status: 0});
        })
        .catch(err => console.log(err));    
});

router.get('/increase/:id', (req, res) => {
    Cart.findByIdAndUpdate({_id: req.params.id}, {$inc: {quantity: 1}}, function(err, doc) { if(err) {console.log(err);} })
    Cart.find()
        .then (result => {
            res.render('cart', {product: result, pageTitle: 'cart', pageName: 'Cart', status: 1});
        })
        .catch(err => console.log(err)); 
});

router.get('/decrease/:id', (req, res) => {
    Cart.findByIdAndUpdate({_id: req.params.id}, {$inc: {quantity: -1}}, function(err, doc) { if(err) {console.log(err);} 
        if (doc.quantity == 1) {
            Cart.findByIdAndDelete(req.params.id, function(err, doc) { if(err) {console.log(err); } });
            Cart.find()
                .then (result => {
                    res.render('cart', {product: result, pageTitle: 'cart', pageName: 'Cart', status: 1});
                })
                .catch(err => console.log(err));
        } else {
            Cart.find()
                .then (result => {
                    res.render('cart', {product: result, pageTitle: 'cart', pageName: 'Cart', status: 1});
                })
                .catch(err => console.log(err));
        }})
});

router.get('/cart', (req, res) => { // retrieving items from cart
    Cart.find()
        .then (result => {
            res.render('cart', {product: result, pageTitle: 'cart', pageName: 'Cart', status: 0});
        })
        .catch(err => console.log(err));
});

router.post('/add-wish-list', (req, res) => {
    const itemId = req.body.id;
    if (req.body.catId == 'cat1') {
        ct1product.findById(itemId)
            .then(result => { insertIntoWishList(result, itemId); })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat2') {
        ct2product.findById(itemId)
            .then(result => { insertIntoWishList(result, itemId); })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat3') {
        ct3product.findById(itemId)
            .then(result => { insertIntoWishList(result, itemId); })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat4') {
        ct4product.findById(itemId)
            .then(result => { insertIntoWishList(result, itemId); })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat5') {
        ct5product.findById(itemId)
            .then(result => { insertIntoWishList(result, itemId); })
            .catch(err => console.log(err));
    } else {
        ct6product.findById(itemId)
            .then(result => { insertIntoWishList(result, itemId); })
            .catch(err => console.log(err));
    }
});

function insertIntoWishList(result, itemId) {
    WishList.findOneAndUpdate({itemId: itemId}, {$inc: {quantity: 1}}, function(err, doc) { if(err) {console.log(err);}
    if (doc == null) {
        var prod = { itemId: itemId, title: result.title, price: result.price, quantity: 1, img: result.img};
        WishList.collection.insertOne(prod); console.log('Insert to cart is success..');
    }
    });
}

router.delete('/:id', (req, res) => {
    WishList.findByIdAndDelete(req.params.id, function(err, doc) { if(err) {console.log(err); } });
    WishList.find()
        .then (result => {
            res.render('wish-list', {product: result, pageTitle: 'wish list', pageName: 'Wish List', status: 0});
        })
        .catch(err => console.log(err));    
});

router.get('/increase/:id', (req, res) => {
    WishList.findByIdAndUpdate({_id: req.params.id}, {$inc: {quantity: 1}}, function(err, doc) { if(err) {console.log(err);} })
    WishList.find()
        .then (result => {
            res.render('wish-list', {product: result, pageTitle: 'wish list', pageName: 'Wish List', status: 0});
        })
        .catch(err => console.log(err)); 
});

router.get('/decrease/:id', (req, res) => {
    WishList.findByIdAndUpdate({_id: req.params.id}, {$inc: {quantity: -1}}, function(err, doc) { if(err) {console.log(err);} 
    if(doc.quantity == 1) {
        WishList.findByIdAndDelete(req.params.id, function(err, doc) { if(err) {console.log(err); } });
        WishList.find()
            .then (result => {
                res.render('wish-list', {product: result, pageTitle: 'wish list', pageName: 'Wish List', status: 0});
            })
            .catch(err => console.log(err)); 
    } else {
        WishList.find()
            .then (result => {
                res.render('wish-list', {product: result, pageTitle: 'wish list', pageName: 'Wish List', status: 0});
            })
            .catch(err => console.log(err)); 
    }})
});

router.get('/wish-list', (req, res) => {
    WishList.find()
        .then (result => {
            res.render('wish-list', {product: result, pageTitle: 'wish list', pageName: 'Wish List', status: 0});
        })
        .catch(err => console.log(err));
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
});''

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