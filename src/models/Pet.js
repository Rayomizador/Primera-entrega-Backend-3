const mongoose = require('mongoose');

const petCollection = 'pets';

const petSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specie: { type: String, required: true },
    adopted: { type: Boolean, default: false },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        default: null
    }
});

const petModel = mongoose.model(petCollection, petSchema);

module.exports = petModel;
