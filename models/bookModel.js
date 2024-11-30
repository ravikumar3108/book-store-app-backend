const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    trending: {
        type: Boolean,
    },
    coverImage: {
        type: String,
    },
    oldPrice: {
        type: Number,
    },
    newPrice: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

}, {
    timestamps: true,
})

module.exports = mongoose.model("Book", bookSchema)