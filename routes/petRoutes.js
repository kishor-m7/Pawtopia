const express = require('express');
const router = express.Router();

// Assuming we have a Pet model defined 
const Pet = require('../models/Pet'); // Adjust this path as needed

// Create a new pet
router.post('/', async (req, res) => {
    try {
        const pet = new Pet(req.body);
        await pet.save();
        res.status(201).send(pet);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read all pets
router.get('/', async (req, res) => {
    try {
        const pets = await Pet.find();
        res.send(pets);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read a specific pet by ID
router.get('/:id', async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id);
        if (!pet) {
            return res.status(404).send();
        }
        res.send(pet);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a pet by ID
router.patch('/:id', async (req, res) => {
    try {
        const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!pet) {
            return res.status(404).send();
        }
        res.send(pet);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a pet by ID
router.delete('/:id', async (req, res) => {
    try {
        const pet = await Pet.findByIdAndDelete(req.params.id);
        if (!pet) {
            return res.status(404).send();
        }
        res.send(pet);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;