const jwt = require('jsonwebtoken');
const config = require('../config');

/**
 * Genera un token
 * @param {*} payload
 * @returns String del token
 */
const generateToken = payload => jwt.sign(payload, config.authJwtSecret);

/**
 * Verifica si el token es correcto
 * @param string: token
 * @returns string u objeto
 */
const hashToken = token => jwt.verify(token, config.authJwtSecret);

module.exports = {generateToken, hashToken};
