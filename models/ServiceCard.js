const mongoose = require('mongoose');

const serviceCardSchema = mongoose.Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    image: { type: String, required: true },
    type: { type: String, required: true } // e.g., 'video', 'doctor', 'lab', 'surgery'
});

const ServiceCard = mongoose.model('ServiceCard', serviceCardSchema);
module.exports = ServiceCard;
