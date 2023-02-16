const mongoose = require('mongoose')
const Schema = mongoose.Schema


const cartSchema = new Schema({

    products: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
        },
        price: {
            type: Number,
            ref: "Product"
        }
    }]
    ,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('Cart', cartSchema)
