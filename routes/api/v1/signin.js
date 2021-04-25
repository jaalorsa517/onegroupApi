const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const {insertUser, isUser} = require('../../../services/mongo/usersMongo');

router.post('/', async (req, res) => {
  const user = req.body;
  try {
    if (await isUser({email: user.email}))
      return res.status(404).json({message: 'Usuario ya existe'});

    user.password = bcrypt.hashSync(user.password, 10);
    const idUser = await insertUser(user);
    return res
      .status(201)
      .json({message: 'Recurso creado', idInserted: idUser});
  } catch (error) {
    console.log('Error en signin ' + error);
    return res.status(400).json({message: 'No se pudo crear el recurso'});
  }
});

module.exports = router;
