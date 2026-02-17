const bcrypt = require('bcrypt');

/**
 * Encripta una contraseña utilizando bcrypt.
 * @param {string} password - La contraseña en texto plano.
 * @returns {Promise<string>} - La contraseña encriptada.
 */
const createHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

/**
 * Compara una contraseña en texto plano con un hash.
 * @param {string} password - La contraseña en texto plano.
 * @param {string} hash - El hash almacenado.
 * @returns {Promise<boolean>} - Verdadero si coinciden.
 */
const isValidPassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
};

module.exports = {
    createHash,
    isValidPassword
};
