const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number }, // For strikethrough price
    image: { type: String, required: true },
    category: { type: String, required: true }, // Could be ObjectId ref, but String is simpler for now
    concern: { type: String }, // e.g. 'Diabetes', 'Heart Care'
    countInStock: { type: Number, required: true, default: 0 }
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
