// petRoutes.js

const express = require('express');
const router = express.Router();

// POST create a new pet
router.post('/', (req, res) => {
    // Code to create a new pet
});

// GET all pets
router.get('/', (req, res) => {
    // Code to fetch all pets
});

// GET pet by ID
router.get('/:id', (req, res) => {
    // Code to fetch pet by ID
});

// PUT update a pet
router.put('/:id', (req, res) => {
    // Code to update a pet
});

// DELETE a pet
router.delete('/:id', (req, res) => {
    // Code to delete a pet
});

module.exports = router;