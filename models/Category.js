const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }, // URL to image
    description: { type: String }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
