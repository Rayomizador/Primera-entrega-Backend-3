const { faker } = require('@faker-js/faker');
const { createHash } = require('../utils/hash');

/**
 * Genera un usuario mockeado.
 * @returns {Promise<Object>}
 */
const generateMockUser = async () => {
    const password = await createHash('coder123'); // Contraseña fija encriptada según requerimiento
    const role = faker.helpers.arrayElement(['user', 'admin']);
    
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password,
        role,
        pets: [] // Array vacío según requerimiento
    };
};

/**
 * Genera un pet mockeado.
 * @returns {Object}
 */
const generateMockPet = () => {
    return {
        name: faker.animal.dog(), // O cualquier animal
        specie: faker.animal.type(),
        adopted: false,
        owner: null
    };
};

module.exports = {
    generateMockUser,
    generateMockPet
};
