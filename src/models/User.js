const mongoose = require('mongoose');

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    pets: {
        type: [
            {
                pet: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'pets'
                }
            }
        ],
        default: []
    }
});

const userModel = mongoose.model(userCollection, userSchema);

module.exports = userModel;
