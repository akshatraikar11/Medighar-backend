const ServiceCard = require('../models/ServiceCard');
const Concern = require('../models/Concern');
const Category = require('../models/Category');

// @desc    Get all service cards (top grid)
// @route   GET /api/cards/services
// @access  Public
const getServiceCards = async (req, res) => {
    try {
        const cards = await ServiceCard.find({});
        res.json(cards);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get all health concerns (middle slider)
// @route   GET /api/cards/concerns
// @access  Public
const getConcerns = async (req, res) => {
    try {
        const concerns = await Concern.find({});
        res.json(concerns);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get all categories (bottom slider)
// @route   GET /api/cards/categories
// @access  Public
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getServiceCards,
    getConcerns,
    getCategories,
};
