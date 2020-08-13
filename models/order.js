const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    shipping: {
        firstName: {type: String},
        lastName: {type: String},
        address: {
            address1: {type: String},
            address2: {type: String},
            city: {type: String},
            state: {type: String},
            zipCode: {type: Number}
        },
    },
    billing: {
        firstName: {type: String},
        lastName: {type: String},
        address: {
            address1: {type: String},
            address2: {type: String},
            city: {type: String},
            state: {type: String},
            zipCode: {type: Number}
        },
    },
    card: {
        creditCard: {type: String},
        cardNumber: {type: Number},
        expiration: {
            expirationMonth: {type: Number},
            expirationYear: {type: Number}
        },
        cvv: {type: Number},
    }
})
module.exports = mongoose.model('order', orderSchema);