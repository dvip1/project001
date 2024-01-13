const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    media: String,
    author: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    support: {
        type: Number,
        default: 0
    }
})