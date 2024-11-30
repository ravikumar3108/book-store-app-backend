const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,

    },
    address: {
        city: {
            type: String
        },
        country: String,
        state: String,
        zipcode: String
    },
    phone: {
        type: Number,

    },
    productIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
            required: true
        }
    ],
    totalPrice: {
        type: Number,
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Order", orderSchema)