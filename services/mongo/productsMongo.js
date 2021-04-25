const {client, collection} = require('./');
const ObjectId = require('mongodb').ObjectID;

/**
 * Crea un producto
 * @param {Object} product
 * @returns Promise<id>
 */
const createProduct = product =>
  new Promise((resolve, reject) => {
    client.connect(async err => {
      if (err) return reject(err);
      const _collection = collection('products');
      try {
        const id = await _collection.insertOne(product);
        resolve(id.insertedId);
      } catch (error) {
        reject(error);
      }
    });
  });

/**
 * Devuelve una lista con todos los productos seleccionados
 * @returns Array productos
 */
const readProducts = () =>
  new Promise((resolve, reject) => {
    client.connect(async err => {
      if (err) return reject(err);
      const _collection = collection('products');
      try {
        const users = await _collection.find();
        resolve(await users.toArray());
      } catch (error) {
        reject(error);
      }
    });
  });

/**
 * Actualiza un producto
 * @param {*} idProduct
 * @param {Object} product
 * @returns Promise<id>
 */
const updateProduct = (idProduct, product) =>
  new Promise((resolve, reject) => {
    client.connect(async err => {
      if (err) return reject(err);
      const _idProduct = {_id: ObjectId(idProduct)};
      const _collection = collection('products');
      try {
        await _collection.updateOne(_idProduct, {$set: product});
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });

/**
 * Elimina un producto
 * @param {Object} idProduct
 * @returns Promise<id>
 */
const deleteProduct = idProduct =>
  new Promise((resolve, reject) => {
    client.connect(async err => {
      if (err) return reject(err);
      const _collection = collection('products');
      const _idProduct = {_id: ObjectId(idProduct)};
      try {
        const id = await _collection.deleteOne(_idProduct);
        resolve(id.deletedCount);
      } catch (error) {
        reject(error);
      }
    });
  });

module.exports = {createProduct, readProducts, updateProduct, deleteProduct};
