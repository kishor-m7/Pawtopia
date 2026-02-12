// models/Pet.js

class Pet {
    constructor(name, type, age, breed, ownerId) {
        this.name = name;
        this.type = type; // e.g. Dog, Cat
        this.age = age; // in years
        this.breed = breed;
        this.ownerId = ownerId; // reference to the owner's ID
    }

    // Add methods for the Pet model here
}

module.exports = Pet;