const { generateMockUser, generateMockPet } = require('../services/mocking.service');
const userModel = require('../models/User');
const petModel = require('../models/Pet');

/**
 * Endpoint para obtener 50 usuarios mockeados.
 */
const getMockingUsers = async (req, res) => {
    try {
        const users = [];
        for (let i = 0; i < 50; i++) {
            users.push(await generateMockUser());
        }
        res.status(200).send({ status: "success", payload: users });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

/**
 * Endpoint para obtener pets mockeados.
 * (Migrado del primer desafío)
 */
const getMockingPets = async (req, res) => {
    try {
        const pets = [];
        const quantity = req.query.q || 10; // Por defecto 10 si no se especifica
        for (let i = 0; i < quantity; i++) {
            pets.push(generateMockPet());
        }
        res.status(200).send({ status: "success", payload: pets });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

/**
 * Endpoint POST para generar e insertar datos.
 */
const generateData = async (req, res) => {
    const { users, pets } = req.body;
    try {
        const generatedUsers = [];
        for (let i = 0; i < users; i++) {
            generatedUsers.push(await generateMockUser());
        }
        
        const generatedPets = [];
        for (let i = 0; i < pets; i++) {
            generatedPets.push(generateMockPet());
        }

        // Insertar en la base de datos
        const usersResult = await userModel.insertMany(generatedUsers);
        const petsResult = await petModel.insertMany(generatedPets);

        res.status(201).send({
            status: "success",
            message: "Datos generados e insertados correctamente",
            insertedUsers: usersResult.length,
            insertedPets: petsResult.length
        });
    } catch (error) {
        res.status(500).send({ status: "error", error: error.message });
    }
};

module.exports = {
    getMockingUsers,
    getMockingPets,
    generateData
};
