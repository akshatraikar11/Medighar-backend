const Cart = require('../models/Cart');
const Product = require('../models/Product');

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
const getCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            // Create empty cart if not exists
            cart = await Cart.create({ user: req.user._id, items: [] });
        }

        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Add item to cart
// @route   POST /api/cart/add
// @access  Private
const addToCart = async (req, res) => {
    const { productId, qty } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let cart = await Cart.findOne({ user: req.user._id });

        if (!cart) {
            cart = await Cart.create({ user: req.user._id, items: [] });
        }

        const itemIndex = cart.items.findIndex((item) => item.product.toString() === productId);

        if (itemIndex > -1) {
            // Product exists in cart, update quantity
            cart.items[itemIndex].qty += qty;
        } else {
            // Add new item
            cart.items.push({
                product: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
                qty: qty,
            });
        }

        // Recalculate total price
        cart.totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.qty, 0);

        await cart.save();
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:itemId
// @access  Private
const removeFromCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ user: req.user._id });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });

        cart.items = cart.items.filter((item) => item._id.toString() !== req.params.itemId);

        // Recalculate total price
        cart.totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.qty, 0);

        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
};
