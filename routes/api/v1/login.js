var express = require('express');
var router = express.Router();
var {getUser} = require('../../../datas/mongo/usersMongo');

router.post('/', async (req, res) => {
  const {user} = req.body;
  try {
    const _user = await getUser(user.email);
    if (!_user)
      res.status(404).json({message: 'Usuario o contraseña incorrectos'});

    //Falta encriptar passwords
    if (user.password !== _user.password)
      res.status(401).json({message: 'Usuario o contraseña incorrectos'});

    res.status(200).json({message: 'Recurso creado', id: idUser});
  } catch (error) {
    res.status(400).json({message: 'No se pudo crear el recurso'});
  }
  console.log(product);
});

module.exports = router;
