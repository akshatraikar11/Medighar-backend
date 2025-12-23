const mongoose = require('mongoose');

const concernSchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true }
});

const Concern = mongoose.model('Concern', concernSchema);
module.exports = Concern;
