const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ct4Schema = new Schema ({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    size: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    instructions: {
        type: String
    },
    ingredients: {
        type: String
    },
    quantity: {
        type: Number
    }
})
module.exports = mongoose.model('ct4products', ct4Schema);