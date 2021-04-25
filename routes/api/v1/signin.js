var express = require('express');
var router = express.Router();
var {insertUser} = require('../../../datas/mongo/usersMongo');

router.post('/', async (req, res) => {
  const {user} = req.body;
  try {
    const idUser = await insertUser(user);
    res.status(201).json({message: 'Recurso creado', id: idUser});
  } catch (error) {
    res.status(400).json({message: 'No se pudo crear el recurso'});
  }
  console.log(product);
});

module.exports = router;
