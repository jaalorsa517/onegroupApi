const {client, collection} = require('.');

/**
 * Funcion que inserta un usuario a mongo
 * @param {*} user: Objeto con los datos del usuario
 * @returns Promise<id>
 */
const insertUser = user =>
  new Promise((resolve, reject) => {
    client.connect(async err => {
      if (err) reject(err);

      const _collection = collection('users');
      try {
        const id = await _collection.insertOne(user);
        resolve(id.insertedId);
      } catch (error) {
        reject(error);
      }
    });
  });

/**
 * Función que busca un usuario por el email
 * @param {email:string} emailUser
 * @returns Promise<Object>
 */
const getUser = emailUser =>
  new Promise((resolve, reject) => {
    client.connect(async err => {
      if (err) reject(err);
      const _collection = collection('users');
      try {
        const user = await _collection.findOne(emailUser);
        resolve(user);
      } catch (error) {
        reject(error);
      }
    });
  });

/**
 * Verifica si un usuario existe
 * @param {*} emailUser
 * @returns Promise<boolean>
 */
const isUser = emailUser =>
  new Promise((resolve, reject) => {
    client.connect(async err => {
      if (err) reject(err);
      const _collection = collection('users');
      try {
        (await _collection.findOne(emailUser)) ? resolve(true) : resolve(false);
      } catch (error) {
        reject(error);
      }
    });
  });

module.exports = {insertUser, getUser, isUser};
