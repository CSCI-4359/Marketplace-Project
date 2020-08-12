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
const User = require('../models/user');
const cart = require('../models/cart');

const router = express.Router();

router.get('/', (req, res) => { // homepage display 
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct1product.find()
                .then(result => {
                    res.render('index', {
                        product: result,
                        cart: cart,
                        pageTitle: 'Fresh Produce',
                        pageName: 'Fresh Produce'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.post('/add-cart', (req, res) => { // inserting items from cart 
    const itemId = req.body.id;
    if (req.body.catId == 'cat1') {
        ct1product.findById(itemId)
            .then(result => {
                insertIntoCart(result, itemId);
            })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat2') {
        ct2product.findById(itemId)
            .then(result => {
                insertIntoCart(result, itemId);
            })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat3') {
        ct3product.findById(itemId)
            .then(result => {
                insertIntoCart(result, itemId);
            })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat4') {
        ct4product.findById(itemId)
            .then(result => {
                insertIntoCart(result, itemId);
            })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat5') {
        ct5product.findById(itemId)
            .then(result => {
                insertIntoCart(result, itemId);
            })
            .catch(err => console.log(err));
    } else {
        ct6product.findById(itemId)
            .then(result => {
                insertIntoCart(result, itemId);
            })
            .catch(err => console.log(err));
    }
});

function insertIntoCart(result, itemId) {
    Cart.findOneAndUpdate({
        itemId: itemId
    }, {
        $inc: {
            quantity: 1
        }
    }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        console.log(doc);
        if (doc == null) {
            var prod = {
                itemId: itemId,
                title: result.title,
                price: result.price,
                quantity: 1,
                img: result.img
            };
            Cart.collection.insertOne(prod);
            console.log('Insert to cart is success..');
        }
    });
}

router.delete('/:id', (req, res) => {
    Cart.findByIdAndDelete(req.params.id, function (err, doc) {
        if (err) {
            console.log(err);
        }
    });
    Cart.find()
        .then(result => {
            res.render('cart', {
                cart: result,
                pageTitle: 'cart',
                pageName: 'Cart'
            });
        })
        .catch(err => console.log(err));
});

router.get('/increase/:id', (req, res) => {
    Cart.findByIdAndUpdate({
        _id: req.params.id
    }, {
        $inc: {
            quantity: 1
        }
    }, function (err, doc) {
        if (err) {
            console.log(err);
        }
    })
    Cart.find()
        .then(result => {
            res.render('cart', {
                cart: result,
                pageTitle: 'cart',
                pageName: 'Cart'
            });
        })
        .catch(err => console.log(err));
});

router.get('/decrease/:id', (req, res) => {
    Cart.findByIdAndUpdate({
        _id: req.params.id
    }, {
        $inc: {
            quantity: -1
        }
    }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        if (doc.quantity == 1) {
            Cart.findByIdAndDelete(req.params.id, function (err, doc) {
                if (err) {
                    console.log(err);
                }
            });
            Cart.find()
                .then(result => {
                    res.render('cart', {
                        cart: result,
                        pageTitle: 'cart',
                        pageName: 'Cart'
                    });
                })
                .catch(err => console.log(err));
        } else {
            Cart.find()
                .then(result => {
                    res.render('cart', {
                        cart: result,
                        pageTitle: 'cart',
                        pageName: 'Cart'
                    });
                })
                .catch(err => console.log(err));
        }
    })
});

router.get('/cart', (req, res) => { // retrieving items from cart
    Cart.find()
        .then(result => {
            res.render('cart', {
                cart: result,
                pageTitle: 'cart',
                pageName: 'Cart'
            });
        })
        .catch(err => console.log(err));
});

router.post('/add-wish-list', (req, res) => {
    const itemId = req.body.id;
    if (req.body.catId == 'cat1') {
        ct1product.findById(itemId)
            .then(result => {
                insertIntoWishList(result, itemId);
            })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat2') {
        ct2product.findById(itemId)
            .then(result => {
                insertIntoWishList(result, itemId);
            })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat3') {
        ct3product.findById(itemId)
            .then(result => {
                insertIntoWishList(result, itemId);
            })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat4') {
        ct4product.findById(itemId)
            .then(result => {
                insertIntoWishList(result, itemId);
            })
            .catch(err => console.log(err));
    } else if (req.body.catId == 'cat5') {
        ct5product.findById(itemId)
            .then(result => {
                insertIntoWishList(result, itemId);
            })
            .catch(err => console.log(err));
    } else {
        ct6product.findById(itemId)
            .then(result => {
                insertIntoWishList(result, itemId);
            })
            .catch(err => console.log(err));
    }
});

function insertIntoWishList(result, itemId) {
    WishList.findOneAndUpdate({
        itemId: itemId
    }, {
        $inc: {
            quantity: 1
        }
    }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        if (doc == null) {
            var prod = {
                itemId: itemId,
                title: result.title,
                price: result.price,
                quantity: 1,
                img: result.img
            };
            WishList.collection.insertOne(prod);
            console.log('Insert to cart is success..');
        }
    });
}

router.delete('/:id', (req, res) => {
    WishList.findByIdAndDelete(req.params.id, function (err, doc) {
        if (err) {
            console.log(err);
        }
    });
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            WishList.find()
                .then(result => {
                    res.render('wish-list', {
                        wishList: result,
                        cart: cart,
                        pageTitle: 'Wish List',
                        pageName: 'Wish List'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/increase/:id', (req, res) => {
    WishList.findByIdAndUpdate({
        _id: req.params.id
    }, {
        $inc: {
            quantity: 1
        }
    }, function (err, doc) {
        if (err) {
            console.log(err);
        }
    })
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            WishList.find()
                .then(result => {
                    res.render('wish-list', {
                        wishList: result,
                        cart: cart,
                        pageTitle: 'Wish List',
                        pageName: 'Wish List'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/decrease/:id', (req, res) => {
    WishList.findByIdAndUpdate({
        _id: req.params.id
    }, {
        $inc: {
            quantity: -1
        }
    }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        if (doc.quantity == 1) {
            WishList.findByIdAndDelete(req.params.id, function (err, doc) {
                if (err) {
                    console.log(err);
                }
            });
            Cart.find({}, function (err, cart) {
                if (err) {
                    console.log(err);
                } else {
                    WishList.find()
                        .then(result => {
                            res.render('wish-list', {
                                wishList: result,
                                cart: cart,
                                pageTitle: 'Wish List',
                                pageName: 'Wish List'
                            });
                        })
                        .catch(err => console.log(err));
                }
            });
        } else {
            Cart.find({}, function (err, cart) {
                if (err) {
                    console.log(err);
                } else {
                    WishList.find()
                        .then(result => {
                            res.render('wish-list', {
                                wishList: result,
                                cart: cart,
                                pageTitle: 'Wish List',
                                pageName: 'Wish List'
                            });
                        })
                        .catch(err => console.log(err));
                }
            });
        }
    })
});

router.get('/wish-list', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            WishList.find()
                .then(result => {
                    res.render('wish-list', {
                        wishList: result,
                        cart: cart,
                        pageTitle: 'Wish List',
                        pageName: 'Wish List'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/contact', (req, res) => {
    Cart.find()
        .then(result => {
            res.render('contact', {
                cart: result,
                pageTitle: 'Contact'
            });
        })
        .catch(err => console.log(err));
});

router.get('/register', (req, res) => {
    Cart.find()
        .then(result => {
            res.render('register', {
                cart: result,
                pageTitle: 'Register'
            });
        })
        .catch(err => console.log(err));
});

router.post('/add-register', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const zipCode = req.body.zipCode;
    const email = req.body.email;
    const password = req.body.password;
    var user = {
        firstName,
        lastName,
        address: {
            address1,
            address2,
            city,
            state,
            zipCode
        },
        email,
        password
    }
    User.findOne({
        email: req.body.email
    }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        if (doc == null) {
            User.collection.insertOne(user);
            Cart.find()
                .then(result => {
                    res.render('checkout', {
                        product: result,
                        cart: cart,
                        pageTitle: 'Checkout'
                    });
                })
                .catch(err => console.log(err));
        } else {
            Cart.find()
                .then(result => {
                    res.render('register', {
                        cart: result,
                        pageTitle: 'Register',
                        message: 'That email address is already registered.'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.post('/check-signIn', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
        email: req.body.email
    }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        if (doc == null) {
            Cart.find()
                .then(result => {
                    res.render('register', {
                        cart: result,
                        pageTitle: 'Register',
                        message: 'Please register for an account.'
                    });
                })
                .catch(err => console.log(err));
        } else {
            User.findOne({
                email: req.body.email
            }, function (err, doc) {
                if (err) {
                    console.log(err);
                } else {
                    cart.find()
                        .then(result => {
                            res.render('cart', {
                                user: doc,
                                cart: result,
                                pageTitle: 'Cart',
                                pageName: 'Cart'
                            });
                        })
                        .catch(err => console.log(err));
                }
            });
        }
    });
});

router.get('/checkout', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            User.find()
                .then(result => {
                    res.render('checkout', {
                        user: result,
                        cart: cart,
                        pageTitle: 'Checkout'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct2', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct2product.find()
                .then(result => {
                    res.render('ct2', {
                        product: result,
                        cart: cart,
                        pageTitle: 'Cereal',
                        pageName: 'Cereal'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct3', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct3product.find()
                .then(result => {
                    res.render('ct3', {
                        product: result,
                        cart: cart,
                        pageTitle: 'Dairy',
                        pageName: 'Dairy'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct4', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct4product.find()
                .then(result => {
                    res.render('ct4', {
                        product: result,
                        cart: cart,
                        pageTitle: 'Everyday Items',
                        pageName: 'Everyday Items'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct5', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct5product.find()
                .then(result => {
                    res.render('ct5', {
                        product: result,
                        cart: cart,
                        pageTitle: 'Breakfast Items',
                        pageName: 'Breakfast Items'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct6', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct6product.find()
                .then(result => {
                    res.render('ct6', {
                        product: result,
                        cart: cart,
                        pageTitle: 'Baking Items',
                        pageName: 'Baking Items'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct1/:prodId', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct1product.findById(req.params.prodId)
                .then(result => {
                    res.render('product-detail1', {
                        prod: result,
                        cart: cart,
                        pageTitle: 'Items Detail',
                        pageName: 'Fresh Produce'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct2/:prodId', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct2product.findById(req.params.prodId)
                .then(result => {
                    res.render('product-detail2', {
                        prod: result,
                        cart: cart,
                        pageTitle: 'Items Detail',
                        pageName: 'Cereal'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct3/:prodId', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct3product.findById(req.params.prodId)
                .then(result => {
                    res.render('product-detail3', {
                        prod: result,
                        cart: cart,
                        pageTitle: 'Items Detail',
                        pageName: 'Dairy'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct4/:prodId', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct4product.findById(req.params.prodId)
                .then(result => {
                    res.render('product-detail4', {
                        prod: result,
                        cart: cart,
                        pageTitle: 'Items Detail',
                        pageName: 'Everyday Items'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct5/:prodId', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct5product.findById(req.params.prodId)
                .then(result => {
                    res.render('product-detail5', {
                        prod: result,
                        cart: cart,
                        pageTitle: 'Items Detail',
                        pageName: 'Breakfast Items'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.get('/ct6/:prodId', (req, res) => {
    Cart.find({}, function (err, cart) {
        if (err) {
            console.log(err);
        } else {
            ct6product.findById(req.params.prodId)
                .then(result => {
                    res.render('product-detail6', {
                        prod: result,
                        cart: cart,
                        pageTitle: 'Items Detail',
                        pageName: 'Baking Items'
                    });
                })
                .catch(err => console.log(err));
        }
    });
});

router.post('/register', (req, res) => {
    const email = req.body.email; const pass = req.body.pass;
    const fname = req.body.fname; const lname = req.body.lname;
    const address1 = req.body.add1;   const address2 = req.body.add2;
    const city = req.body.city;   const state = req.body.state;
    const zipCode = req.body.zip; 

    var user = { email, pass, fname, lname, adress: { address1, address2, city, state, zipCode} };
    User.findOne( {email:req.body.email}, function(err, doc) {if (err) { console.log("err") ; } 
        if (doc == null) {
            User.collection.insertOne(user);
            ct1product.find()
            .then(results => {
                res.render('index', { products: results, pageTitle: 'Home', pageName: 'Category 1'}); })
            .catch(err => console.log(err));
        } else {
            res.render('singup', {pageTitle : 'Sign up', pageName: '', message: 'The same email adress already exists!'});
        }
    });
});

module.exports = router;