const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection configuration
const dbURI = 'mongodb://localhost:27017/mydatabase'; // Change this to your database URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected!'))
    .catch(err => console.log('Database connection error:', err));

app.get('/', (req, res) => {
    res.send('Welcome to the Pawtopia API');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
