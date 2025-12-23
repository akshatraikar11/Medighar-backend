const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
// We will call this after defining the function in config/db.js
// For now, we'll setup the basic app structure
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // For serving static files if needed

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cardRoutes = require('./routes/cardRoutes');
const cartRoutes = require('./routes/cartRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cards', cardRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/services', serviceRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
