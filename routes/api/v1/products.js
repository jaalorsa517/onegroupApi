const express = require('express');
const router = express.Router();
const passport = require('passport');
const {
  createProduct,
  readProducts,
  updateProduct,
  deleteProduct,
} = require('../../../services/mongo/productsMongo');

router.get(
  '/',
  passport.authenticate('bearer', {session: false}),
  async (req, res, next) => {
    try {
      const products = await readProducts();
      res.status(200).json({products});
    } catch (err) {
      console.log('Error en get productos: ' + err);
      res.status(400).json({message: 'Error al obtener productos'});
    }
  }
);

router.post(
  '/',
  passport.authenticate('bearer', {session: false}),
  async (req, res) => {
    const product = req.body;
    try {
      const idProduct = await createProduct(product);
      res.status(201).json({message: 'Recurso creado con exito', idProduct});
    } catch (err) {
      console.log('Error en post productos: ' + err);
      res.status(400).json({message: 'Error al guardar producto'});
    }
  }
);
router.put(
  '/:idProduct',
  passport.authenticate('bearer', {session: false}),
  async (req, res) => {
    const product = req.body;
    const idProduct = req.params.idProduct;
    try {
      await updateProduct(idProduct, product);
      res.status(200).json({message: 'Recurso actualizado con éxito'});
    } catch (err) {
      console.log('Error en put productos: ' + err);
      res.status(400).json({message: 'Error al actualizar el producto'});
    }
  }
);
router.delete(
  '/:idProduct',
  passport.authenticate('bearer', {session: false}),
  async (req, res) => {
    const idProduct = req.params.idProduct;
    try {
      await deleteProduct(idProduct);
      res.status(200).json({message: 'Recurso eliminado con exito'});
    } catch (err) {
      console.log('Error en delete productos: ' + err);
      res.status(400).json({message: 'Error al eliminar producto'});
    }
  }
);

module.exports = router;
