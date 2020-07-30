const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ct2Schema = new Schema ({
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
    },
    description: {
        type: String
    }
})
module.exports = mongoose.model('ct2products', ct2Schema);