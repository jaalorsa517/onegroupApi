const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const {getUser} = require('../../../services/mongo/usersMongo');
const {generateToken} = require('../../../utils/tokens');

router.post('/', async (req, res) => {
  const user = req.body;
  try {
    const _user = await getUser({email: user.email});
    if (!_user)
      return res
        .status(404)
        .json({message: 'Usuario o contraseña incorrectos'});

    if (!bcrypt.compareSync(user.password, _user.password))
      return res
        .status(404)
        .json({message: 'Usuario o contraseña incorrectos'});

    //Generar el token
    const token = generateToken({
      email: _user.email,
      name: _user.name,
      lastName: _user.lastName,
    });

    return res.status(200).json({message: 'Acceso concedido', token});
  } catch (error) {
    console.log('Error en login: ' + error);
    return res.status(400).json({message: 'No se puede loguear'});
  }
});

module.exports = router;
