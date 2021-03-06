const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishListSchema = new Schema ({
    itemId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    Quantity: {
        type: Number
    },
    img: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('WishList', wishListSchema);