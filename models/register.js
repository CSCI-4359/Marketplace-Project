const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        address1: { type: String },
        address2: { type: String },
        city: { type: String },
        state: {type: String },
        zipCode: { type: Number },
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})
module.exports = mongoose.model('register', registerSchema);