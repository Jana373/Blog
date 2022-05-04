const mongoose = require('mongoose')

const BlogItemSchema = mongoose.Schema({
    /* _id: {
         type: String,
         required: true
     },*/
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    post_date: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    author_title: {
        type: String,
        required: true
    }
})
const blog = module.exports = mongoose.model('blog', BlogItemSchema)