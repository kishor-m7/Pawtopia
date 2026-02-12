const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pawtopia', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

// Connect to database
connectDB();

// Routes
const petRoutes = require('./routes/petRoutes');

// API Routes
app.use('/api/pets', petRoutes);

// Welcome Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Pawtopia API', version: '1.0.0', endpoints: { pets: '/api/pets' } });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!', message: err.message });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Pawtopia API Server running on http://localhost:${PORT}`);
    console.log(`Database: MongoDB connected to ${process.env.MONGODB_URI || 'mongodb://localhost:27017/pawtopia'}`);
});