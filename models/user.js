const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    fname: {
        type: String
    },
    lname:{
        type: String
    },
    adress: {
        add1: { type: String },
        add2: { type: String },
        city: { type: String },
        state: { type: String },
        zip: { type : Number }
    }
});

module.exports = mongoose.model('User', userSchema);