const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema ({
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
module.exports = mongoose.model('Cart', cartSchema);